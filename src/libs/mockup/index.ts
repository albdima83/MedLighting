import {MenuNav, RemoteConfig} from '../models/app.models';
import {RtiLabUiKit} from '../models/rti.models';

const RtiLabUiKitMockup: RtiLabUiKit = {
  baseUrl: 'https://mediasetplay.api-graph.mediaset.it',
  imagesEngine: {
    am: 'https://api-images.cloud.mediaset.net/preprod/api/images/am/v1/{type}/{width}/{height}/{id}?r={r}',
    ml: 'https://api-images.cloud.mediaset.net/preprod/api/images/ml/v1/{type}/{width}/{height}/{id}?r={r}',
    mp: 'https://api-images.cloud.mediaset.net/preprod/api/images/mp/v1/{type}/{width}/{height}/{id}?r={r}',
    mpprod:
      'https://api-images.cloud.mediaset.net/preprod/api/images/mpprod/v1/{type}/{width}/{height}/{id}?r={r}',
    ms: 'https://api-images.cloud.mediaset.net/preprod/api/images/ms/v1/{type}/{width}/{height}/{id}?r={r}',
    mse: 'https://api-images.cloud.mediaset.net/preprod/api/images/mse/v1/{type}/{width}/{height}/{id}?r={r}',
    mst: 'https://api-images.cloud.mediaset.net/preprod/api/images/mst/v1/{type}/{width}/{height}/{id}?r={r}',
    mc: 'https://api-images.cloud.mediaset.net/preprod/api/images/mc/v1/{type}/{width}/{height}/{id}?r={r}',
    nn: 'https://api-images.cloud.mediaset.net/preprod/api/images/nn/v1/{type}/{width}/{height}/{id}?r={r}',
    ma: 'https://img-prod-api.mediasetplay.mediaset.it/prod/media/{id}/{r}/{width}x{height}',
    custom: '{id}',
  },
  usePersistedQueries: true,
  useGetMethodAllQueries: false,
  useGetMethodPersistedQueries: true,
  defaultTheme: {
    alertColor: '#F5A623',
    bgColor: '#0A1014',
    cardBgColor: '#202529',
    ctaTextColor: '#FFFFFF',
    mainColor: '#9D4DE1',
    navBgColor: '#161C1F',
    navSecondaryBgColor: '#202529',
    tabBgColor: '#FFFFFF',
    tabFocusColor: '#9D4DE1',
    textColor: '#FFFFFF',
  },
  template: {
    video: 'video-page-prod',
    movie: 'movie-page-prod',
    live: 'live-page-prod',
    article: 'article-page-prod',
    series: 'series-page-prod',
    seriesMetadata: 'series-metadata-prod',
    station: 'station-page-prod',
    stationMetadata: 'station-metadata-prod',
    staticpage: 'static-page-prod',
  },
  recommendations: {
    search: {
      uxReference: 'main',
      property: 'search',
    },
  },
};

const MenuNavMockup: MenuNav = {
  navUser: '600ec2ff1de1c4001bfae33b',
  navMain: '600ae2c21de1c4001a10c7d7',
  assets: {
    extendedLogoSecondary: "https://static3.mediasetplay.mediaset.it/static/images/app/mplayinf-logo-complete.png",
    shortLogoSecondary: "https://static3.mediasetplay.mediaset.it/static/images/app/mplay-logo-short.png"
  }
};

const RemoteConfigMockup: RemoteConfig = {
  homepage: '606b2531a0e845001b874609',
  homepagePay: '606b258223eec6001834fedc',
  homepageKids: '606734f5a0e845001ae8d574',
  menuNav: MenuNavMockup,
  uiKit: RtiLabUiKitMockup,
  optionId: '600ec4641de1c4001bfae343',
};

export {RemoteConfigMockup, RtiLabUiKitMockup, MenuNavMockup};
