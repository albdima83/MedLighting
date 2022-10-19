import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache, NextLink, NormalizedCacheObject, Operation } from "@apollo/client/core";
import appconfig from "../configurations/appconfig";
import AsyncStorage from "../storage";
import result from './introspections/introspection-result';

console.log(`appconfig.apolloBaseURL: [${appconfig.apolloBaseURL}]`);

const getUserJWT = async () => { 
  const token = await AsyncStorage.getItem('it.mediaset.authorization')
  return token ? `${token}` : null
}

const getUserSid = async () => { 
  const sid = await AsyncStorage.getItem('it.mediaset.sid')
  return sid ?? ""
}

const httpLink = new HttpLink({ uri: "https://mediasetplay-preprod.api-graph.mediaset.it" });
const apolloMemory = new InMemoryCache({
  addTypename: true,
  possibleTypes: result.possibleTypes,
  /**
	 * Disable entity normalization because currently we don't have use cases that benefits from this
	 *
	 * We must configure it for every type because there are multiple quirks of how the middleware uses these entities:
	 * - "id" null for some entities
	 * - "guid" instead of "id"
	 * - context-based data, e.g. SeriesItem and selectedSeason of "getSeriesPage"
	 **/
	typePolicies: {
		NavInterface: {
			keyFields: false,
		},
		NavItemInterface: {
			keyFields: false,
		},
		PageInterface: {
			keyFields: false,
		},
		PageMetadata: {
			keyFields: false,
		},
		Section: {
			keyFields: false,
		},
		// Collection: {
		// 	keyFields: false,
		// },
		// some Item uses "id" and some Item use "guid", some Item have special quirks like "SeriesItem" and selectedSeason
		Item: {
			keyFields: false,
			// keyFields: (object) => {
			// 	console.log('keyFields of', object);
			// 	if ('id' in object && object.id) {
			// 		return ['id'];
			// 	} else if ('guid' in object && object.guid) {
			// 		return ['guid'];
			// 	}
			// 	return null;
			// },
		},
		// SeriesItem: {
		// 	keyFields: (object) => {
		// 		return 'selectedSeason' in object
		// 			? ['guid', 'selectedSeason', ['guid']]
		// 			: ['guid'];
		// 	},
		// },
		Option: {
			keyFields: false,
		},
		// this can have some quirks, e.g. "additionalLabel" Ora in onda with "id" = null
		Label: {
			keyFields: false,
		},
		// "id" it's the F-code and not an unique entity identifier
		ImagePlaceholder: {
			keyFields: false,
		},
		// "id" it's a reference to a Label and not an unique entity idenfier (e.g. Infinity Premiere with a specific startDate / endDate)
		LabelReference: {
			keyFields: false,
		},
		Collection: {
			keyFields: (obj, context) => {
				try {
					if (
						'attributes' in obj &&
						// @ts-ignore
						'refreshInterval' in obj.attributes &&
						// @ts-ignore
						obj.attributes.refreshInterval &&
						obj.id
					) {
						/**
						 * https://jira.mediaset.it/browse/OTTMNTZ-6244
						 * We calculate the cache key here without giving the "key path" to Apollo
						 * because there is a very strange issue on chrome 47 Tizen 2017.
						 * (it happened also on BrowserStack sometimes)
						 *
						 * We don't know if it's a web engine or a polyfill issue (core-js, babel, tslib?).
						 * It seems that's something related to "Object.create(null)" / DeepMerger and object references / proptotypes.
						 *
						 * Internally JSON.stringify of its "keyObject" sometimes results in an empty object "{}" which in
						 * turns causes the cache to behave strangely.
						 */
						// 	return ['id'];
						return `${obj.__typename}:${JSON.stringify({ id: obj.id as string })}`;
					}
				} catch (err) {
					console.error(err);
				}

				// return obj.id && obj.__typename != 'PlaceholderCollection' ? ['id'] : false;
				return false;
			},
		},
	},
});

const authMiddlewareOLD = new ApolloLink((operation: Operation, forward: NextLink) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      "authorization": "eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJtZWRpYXNldC10ZXN0L21lZGlhc2V0LXRlc3QvYW5vbnltb3VzIiwiaXNzIjoiMSIsImV4cCI6MTY2NDEwMzk0NCwiaWF0IjoxNjYzNTg1NTQ0NTc1LCJqdGkiOiIwYjlhNGFkNS1hMGQ3LTQ4YjMtYTQwYS00MGIyOGM2ZjlmYjUiLCJkaWQiOiJtZWRpYXNldC10ZXN0IiwidW5tIjoiYW5vbnltb3VzIiwiY3R4Ijoie1widXNlck5hbWVcIiA6IFwibWVkaWFzZXQtdGVzdC9hbm9ueW1vdXNcIiwgXCJmYWxsYmFja1wiOiBcInRydWVcIixcInR5cGVcIjpcInVucmVnaXN0ZXJlZFwiLFwiYXR0cmlidXRlc1wiOnsgXCJhcHBOYW1lXCI6IFwiZ2VuZXJpYy10dnNpbXVsYXRvclwiLCBcImhhc2hcIjogXCJpYlVkeU9kcytrU0ZVWTUwMk4zSTNTTkJ1NVdXMnpzRDZrVU1DQnVuSE9ZPVwifX1cbiIsIm9pZCI6IjI3MDI1OTkwMzcifQ.N7GeiaUmAnloNsZRbxRep2l9iNCZ0uQVR_cspKb8pllLK2oeddOUChN_wVXQ0QkVKccAU7NGfIcqPuCQCv-pjOP6XAZwdVv76tarkSbtp4sq1xRirFzhu5S3P-g2pvMd-Yzg59gXhYHbMdSCUzmy6IANeMvFVz_LL6W2YSYIrMC7g8ey__0mwqlNSigBWbCDqNWYNoRx7LEvYgVHIyPab5-Dd8876IwocNz7jYuB993Lnz4Fo3B1WQkju59qSYwf4B2tBnp6JuXpqck58D14rFm-VhF0WO6kZ6j8D4eSk07L7Ew8wSe_IaJ7Ne2kJEOgX-m4hqjX9gqSvw1jj_mkkA",
      "x-m-app-version": "0.37.5",
      "x-m-device-id": "d6e56477-7622-4de6-96a6-549048492597",
      "x-m-os-version":"",
      "x-m-platform": "GENERIC_TVSIMULATOR",
      "x-m-property": "MPLAY",
      "x-m-sid": "f580938d-9eca-47b1-b9f8-f92796f890dc",
      "x-m-user-context": "ixCAeyJwbGF0Zm9ybSI6ImdlbmVyaWMtdHZzaW11bGF0b3IifQM="
    }
  }));
  return forward(operation);
});

const authMiddleware = new ApolloLink((operation: Operation, forward: NextLink) => {
    operation.setContext(async({ headers = {} }) => {
       const token = await getUserJWT();
       const sid = await getUserSid();
       console.log(`token: [${token}]`);
       console.log(`token: [${token}]`);
       console.log(`sid: [${sid}]`);
       const newHeaders = {
        headers:{
          ...headers,
          "Authorization": token,
          "x-m-app-version": "0.37.5",
          "x-m-device-id": "d6e56477-7622-4de6-96a6-549048492597",
          "x-m-os-version":"",
          "x-m-platform": "GENERIC_TVSIMULATOR",
          "x-m-property": "MPLAY",
          "x-m-sid": sid,
          "x-m-user-context": "ixCAeyJwbGF0Zm9ybSI6ImdlbmVyaWMtdHZzaW11bGF0b3IifQM="
        }
      }
       console.log(newHeaders);
       return newHeaders;
    });
  return forward(operation);
})

/*
const link = ApolloLink.from([
	// Tizen 2015 / 2016 don't have window.crypto.subtle used for sha256
	authMiddleware.concat(
		apolloConfigs.usePersistedQueries && window.crypto.subtle 
			? // TODO: we may use @aws-crypto/sha256-browser, we haven't tried because are low traffic platforms and to avoid to introduce issues
			  createPersistedQueryLink({
					sha256,
					useGETForHashedQueries: true,
			  }).concat(httpLink)
			: httpLink
	),
]);
*/

const client = new ApolloClient<NormalizedCacheObject>({cache: apolloMemory,link: concat(authMiddlewareOLD, httpLink)});

export default client