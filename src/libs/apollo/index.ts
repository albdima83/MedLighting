import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache, NextLink, NormalizedCacheObject, Operation } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import appconfig from "../configurations/appconfig";
import AsyncStorage from "../storage";
import result from './introspections/introspection-result';

console.log(`appconfig.apolloBaseURL: [${appconfig.apolloBaseURL}]`);

const getUserJWT = async (): Promise<any> => { 
  const token = await AsyncStorage.getItem('it.mediaset.authorization')
  return token ? `${token}` : null
}

const getUserSid = async (): Promise<any> => { 
  const sid = await AsyncStorage.getItem('it.mediaset.sid')
  return sid ?? ""
}

const httpLink = new HttpLink({ 
	uri: "https://mediasetplay-preprod.api-graph.mediaset.it",
	useGETForQueries: true
});
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

const authMiddleware = setContext(async (_, { headers }) => {
	const token = await getUserJWT();
	const sid = await getUserSid();
	console.log(`token: [${token}]`);
	console.log(`sid: [${sid}]`);
  
	return {
	  headers: {
		...headers,
		"authorization": `${token}`,
		"x-m-app-version": "0.37.5",
		"x-m-device-id": "d6e56477-7622-4de6-96a6-549048492597",
		"x-m-os-version":"",
		"x-m-platform": "GENERIC_TVSIMULATOR",
		"x-m-property": "MPLAY",
		"x-m-sid": `${sid}`,
		"x-m-user-context": "ixCAeyJwbGF0Zm9ybSI6ImdlbmVyaWMtdHZzaW11bGF0b3IifQM="
	  }
	};
});

const link = ApolloLink.from([
	authMiddleware,
	httpLink
])
const client = new ApolloClient<NormalizedCacheObject>({cache: apolloMemory,link: link});

export default client