/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlayVideoPage
// ====================================================

export interface MPlayVideoPage_getVideoPage_analyticsContext {
  __typename: "AnalyticsContext";
  advSiteSection: string | null;
  contentId: string | null;
  brand: string | null;
}

export interface MPlayVideoPage_getVideoPage_advContext {
  __typename: "AdvContext";
  adUnit: string | null;
  advSiteSection: string | null;
  fwCallSignSuffix: string | null;
}

export interface MPlayVideoPage_getVideoPage_dataSource_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PlaceholderItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "SeasonItem" | "SeriesItem" | "StaticItem";
  id: string | null;
  serviceId: string | null;
}

export interface MPlayVideoPage_getVideoPage_dataSource_VideoItem_nextVideo_PlaceholderItem_resolverParams {
  __typename: "KeyValueParam";
  /**
   * example: UxReference | ContentId
   */
  key: string;
  /**
   * The value corresponding to the specified key
   */
  value: string;
}

export interface MPlayVideoPage_getVideoPage_dataSource_VideoItem_nextVideo_PlaceholderItem {
  __typename: "PlaceholderItem";
  id: string | null;
  resolverType: string;
  resolverParams: MPlayVideoPage_getVideoPage_dataSource_VideoItem_nextVideo_PlaceholderItem_resolverParams[] | null;
}

export interface MPlayVideoPage_getVideoPage_dataSource_VideoItem_nextVideo_VideoItem {
  __typename: "VideoItem";
  callSign: string | null;
  guid: string;
}

export type MPlayVideoPage_getVideoPage_dataSource_VideoItem_nextVideo = MPlayVideoPage_getVideoPage_dataSource_VideoItem_nextVideo_PlaceholderItem | MPlayVideoPage_getVideoPage_dataSource_VideoItem_nextVideo_VideoItem;

export interface MPlayVideoPage_getVideoPage_dataSource_VideoItem {
  __typename: "VideoItem";
  /**
   * id CMS vertical
   */
  id: string | null;
  serviceId: string | null;
  guid: string;
  /**
   * Next2Play
   */
  nextVideo: MPlayVideoPage_getVideoPage_dataSource_VideoItem_nextVideo | null;
}

export interface MPlayVideoPage_getVideoPage_dataSource_StationItem_listings {
  __typename: "Listing";
  guid: string | null;
  liveAllowed: boolean | null;
  restartAllowed: boolean | null;
}

export interface MPlayVideoPage_getVideoPage_dataSource_StationItem {
  __typename: "StationItem";
  id: string | null;
  serviceId: string | null;
  callSign: string;
  listings: MPlayVideoPage_getVideoPage_dataSource_StationItem_listings[] | null;
}

export type MPlayVideoPage_getVideoPage_dataSource = MPlayVideoPage_getVideoPage_dataSource_ArticleItem | MPlayVideoPage_getVideoPage_dataSource_VideoItem | MPlayVideoPage_getVideoPage_dataSource_StationItem;

export interface MPlayVideoPage_getVideoPage {
  __typename: "DetailPage";
  id: string;
  type: PageType | null;
  option: string | null;
  analyticsContext: MPlayVideoPage_getVideoPage_analyticsContext | null;
  advContext: MPlayVideoPage_getVideoPage_advContext | null;
  /**
   * This represents the master of the information that has to be rendered by the client
   */
  dataSource: MPlayVideoPage_getVideoPage_dataSource;
}

export interface MPlayVideoPage {
  /**
   * id maps to `{id}` on TGCom/Sport and to `{guid}` on Mplay. templateName is to be used by MPlay
   */
  getVideoPage: MPlayVideoPage_getVideoPage | null;
}

export interface MPlayVideoPageVariables {
  id: string;
  templateName?: string | null;
}
