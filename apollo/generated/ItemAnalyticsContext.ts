/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemAnalyticsContext
// ====================================================

export interface ItemAnalyticsContext_analyticsContext {
  __typename: "ItemAnalyticsContext";
  trackId: string | null;
}

export interface ItemAnalyticsContext {
  __typename: "StationItem" | "VideoItem" | "PlaceholderItem" | "SeriesItem" | "SeasonItem" | "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  analyticsContext: ItemAnalyticsContext_analyticsContext | null;
}
