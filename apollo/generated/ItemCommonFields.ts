/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ItemCommonFields
// ====================================================

export interface ItemCommonFields_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  engine: string;
  id: string;
  r: string;
  type: string;
}

export interface ItemCommonFields_cardImages_Image {
  __typename: "Image";
  w: number;
  h: number;
  format: string;
}

export type ItemCommonFields_cardImages = ItemCommonFields_cardImages_ImagePlaceholder | ItemCommonFields_cardImages_Image;

export interface ItemCommonFields_analyticsContext {
  __typename: "ItemAnalyticsContext";
  trackId: string | null;
}

export interface ItemCommonFields {
  __typename: "StationItem" | "VideoItem" | "PlaceholderItem" | "SeriesItem" | "SeasonItem" | "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardTitle: string | null;
  cardText: string | null;
  cardEyelet: string | null;
  cardImages: ItemCommonFields_cardImages[] | null;
  analyticsContext: ItemCommonFields_analyticsContext | null;
}
