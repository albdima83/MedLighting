/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DataSourceFragment
// ====================================================

export interface DataSourceFragment_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PlaceholderItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "SeasonItem" | "SeriesItem" | "StaticItem";
  id: string | null;
  serviceId: string | null;
}

export interface DataSourceFragment_VideoItem_nextVideo_PlaceholderItem_resolverParams {
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

export interface DataSourceFragment_VideoItem_nextVideo_PlaceholderItem {
  __typename: "PlaceholderItem";
  id: string | null;
  resolverType: string;
  resolverParams: DataSourceFragment_VideoItem_nextVideo_PlaceholderItem_resolverParams[] | null;
}

export interface DataSourceFragment_VideoItem_nextVideo_VideoItem {
  __typename: "VideoItem";
  callSign: string | null;
  guid: string;
}

export type DataSourceFragment_VideoItem_nextVideo = DataSourceFragment_VideoItem_nextVideo_PlaceholderItem | DataSourceFragment_VideoItem_nextVideo_VideoItem;

export interface DataSourceFragment_VideoItem {
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
  nextVideo: DataSourceFragment_VideoItem_nextVideo | null;
}

export interface DataSourceFragment_StationItem_listings {
  __typename: "Listing";
  guid: string | null;
  liveAllowed: boolean | null;
  restartAllowed: boolean | null;
}

export interface DataSourceFragment_StationItem {
  __typename: "StationItem";
  id: string | null;
  serviceId: string | null;
  callSign: string;
  listings: DataSourceFragment_StationItem_listings[] | null;
}

export type DataSourceFragment = DataSourceFragment_ArticleItem | DataSourceFragment_VideoItem | DataSourceFragment_StationItem;
