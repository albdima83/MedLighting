/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemsConnectionBase
// ====================================================

export interface ItemsConnectionBase_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  endCursor: string | null;
  context: string | null;
}

export interface ItemsConnectionBase_items {
  __typename: "StationItem" | "VideoItem" | "PlaceholderItem" | "SeriesItem" | "SeasonItem" | "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
}

export interface ItemsConnectionBase {
  __typename: "ItemsConnection";
  pageInfo: ItemsConnectionBase_pageInfo;
  items: ItemsConnectionBase_items[] | null;
}
