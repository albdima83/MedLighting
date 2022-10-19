/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlayLivePage
// ====================================================

export interface MPlayLivePage_getLivePage_analyticsContext {
  __typename: "AnalyticsContext";
  advSiteSection: string | null;
  contentId: string | null;
  brand: string | null;
}

export interface MPlayLivePage_getLivePage_advContext {
  __typename: "AdvContext";
  adUnit: string | null;
  advSiteSection: string | null;
  fwCallSignSuffix: string | null;
}

export interface MPlayLivePage_getLivePage_dataSource_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PlaceholderItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "SeasonItem" | "SeriesItem" | "StaticItem";
  id: string | null;
  serviceId: string | null;
}

export interface MPlayLivePage_getLivePage_dataSource_VideoItem_nextVideo_PlaceholderItem_resolverParams {
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

export interface MPlayLivePage_getLivePage_dataSource_VideoItem_nextVideo_PlaceholderItem {
  __typename: "PlaceholderItem";
  id: string | null;
  resolverType: string;
  resolverParams: MPlayLivePage_getLivePage_dataSource_VideoItem_nextVideo_PlaceholderItem_resolverParams[] | null;
}

export interface MPlayLivePage_getLivePage_dataSource_VideoItem_nextVideo_VideoItem {
  __typename: "VideoItem";
  callSign: string | null;
  guid: string;
}

export type MPlayLivePage_getLivePage_dataSource_VideoItem_nextVideo = MPlayLivePage_getLivePage_dataSource_VideoItem_nextVideo_PlaceholderItem | MPlayLivePage_getLivePage_dataSource_VideoItem_nextVideo_VideoItem;

export interface MPlayLivePage_getLivePage_dataSource_VideoItem {
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
  nextVideo: MPlayLivePage_getLivePage_dataSource_VideoItem_nextVideo | null;
}

export interface MPlayLivePage_getLivePage_dataSource_StationItem_listings {
  __typename: "Listing";
  guid: string | null;
  liveAllowed: boolean | null;
  restartAllowed: boolean | null;
}

export interface MPlayLivePage_getLivePage_dataSource_StationItem {
  __typename: "StationItem";
  id: string | null;
  serviceId: string | null;
  callSign: string;
  listings: MPlayLivePage_getLivePage_dataSource_StationItem_listings[] | null;
}

export type MPlayLivePage_getLivePage_dataSource = MPlayLivePage_getLivePage_dataSource_ArticleItem | MPlayLivePage_getLivePage_dataSource_VideoItem | MPlayLivePage_getLivePage_dataSource_StationItem;

export interface MPlayLivePage_getLivePage {
  __typename: "DetailPage";
  id: string;
  type: PageType | null;
  option: string | null;
  analyticsContext: MPlayLivePage_getLivePage_analyticsContext | null;
  advContext: MPlayLivePage_getLivePage_advContext | null;
  /**
   * This represents the master of the information that has to be rendered by the client
   */
  dataSource: MPlayLivePage_getLivePage_dataSource;
}

export interface MPlayLivePage {
  /**
   * templateName is to be used by MPlay
   */
  getLivePage: MPlayLivePage_getLivePage | null;
}

export interface MPlayLivePageVariables {
  id: string;
  templateName?: string | null;
}
