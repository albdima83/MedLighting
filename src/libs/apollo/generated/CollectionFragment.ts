/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CollectionLayout, CollectionFlag, CollectionVariant, CollectionTemplate, LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: CollectionFragment
// ====================================================

export interface CollectionFragment_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface CollectionFragment_ctas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_images_Image {
  __typename: "Image";
}

export interface CollectionFragment_images_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type CollectionFragment_images = CollectionFragment_images_Image | CollectionFragment_images_ImagePlaceholder;

export interface CollectionFragment_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface CollectionFragment_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface CollectionFragment_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type CollectionFragment_itemsConnection_items_ArticleItem_cardImages = CollectionFragment_itemsConnection_items_ArticleItem_cardImages_Image | CollectionFragment_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface CollectionFragment_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface CollectionFragment_itemsConnection_items_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_ArticleItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: CollectionFragment_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: CollectionFragment_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: CollectionFragment_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: CollectionFragment_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface CollectionFragment_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface CollectionFragment_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type CollectionFragment_itemsConnection_items_GenericItem_cardImages = CollectionFragment_itemsConnection_items_GenericItem_cardImages_Image | CollectionFragment_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface CollectionFragment_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface CollectionFragment_itemsConnection_items_GenericItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_GenericItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_GenericItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: any | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface CollectionFragment_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: CollectionFragment_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: CollectionFragment_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: CollectionFragment_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: CollectionFragment_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: CollectionFragment_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface CollectionFragment_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface CollectionFragment_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type CollectionFragment_itemsConnection_items_LandingItem_cardImages = CollectionFragment_itemsConnection_items_LandingItem_cardImages_Image | CollectionFragment_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface CollectionFragment_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface CollectionFragment_itemsConnection_items_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_LandingItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: CollectionFragment_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: CollectionFragment_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: CollectionFragment_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: CollectionFragment_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface CollectionFragment_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface CollectionFragment_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type CollectionFragment_itemsConnection_items_PlaceholderItem_cardImages = CollectionFragment_itemsConnection_items_PlaceholderItem_cardImages_Image | CollectionFragment_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface CollectionFragment_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface CollectionFragment_itemsConnection_items_PlaceholderItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_PlaceholderItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: CollectionFragment_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: CollectionFragment_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: CollectionFragment_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: CollectionFragment_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface CollectionFragment_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface CollectionFragment_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type CollectionFragment_itemsConnection_items_VideoItem_cardImages = CollectionFragment_itemsConnection_items_VideoItem_cardImages_Image | CollectionFragment_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface CollectionFragment_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface CollectionFragment_itemsConnection_items_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_VideoItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_VideoItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: any | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface CollectionFragment_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: CollectionFragment_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: CollectionFragment_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: CollectionFragment_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: CollectionFragment_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: CollectionFragment_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface CollectionFragment_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface CollectionFragment_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type CollectionFragment_itemsConnection_items_SeasonItem_cardImages = CollectionFragment_itemsConnection_items_SeasonItem_cardImages_Image | CollectionFragment_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface CollectionFragment_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface CollectionFragment_itemsConnection_items_SeasonItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_SeasonItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_SeasonItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: any | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface CollectionFragment_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: CollectionFragment_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: CollectionFragment_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: CollectionFragment_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: CollectionFragment_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: CollectionFragment_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface CollectionFragment_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface CollectionFragment_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type CollectionFragment_itemsConnection_items_SeriesItem_cardImages = CollectionFragment_itemsConnection_items_SeriesItem_cardImages_Image | CollectionFragment_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface CollectionFragment_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface CollectionFragment_itemsConnection_items_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_SeriesItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_SeriesItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: any | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface CollectionFragment_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: CollectionFragment_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: CollectionFragment_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: CollectionFragment_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: CollectionFragment_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: CollectionFragment_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface CollectionFragment_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface CollectionFragment_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type CollectionFragment_itemsConnection_items_StationItem_cardImages = CollectionFragment_itemsConnection_items_StationItem_cardImages_Image | CollectionFragment_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface CollectionFragment_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface CollectionFragment_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: CollectionFragment_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface CollectionFragment_itemsConnection_items_StationItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_StationItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface CollectionFragment_itemsConnection_items_StationItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: any | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface CollectionFragment_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface CollectionFragment_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: CollectionFragment_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: CollectionFragment_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: CollectionFragment_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: CollectionFragment_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: CollectionFragment_itemsConnection_items_StationItem_additionalLabel | null;
  listings: CollectionFragment_itemsConnection_items_StationItem_listings[] | null;
}

export type CollectionFragment_itemsConnection_items = CollectionFragment_itemsConnection_items_ArticleItem | CollectionFragment_itemsConnection_items_GenericItem | CollectionFragment_itemsConnection_items_LandingItem | CollectionFragment_itemsConnection_items_PlaceholderItem | CollectionFragment_itemsConnection_items_VideoItem | CollectionFragment_itemsConnection_items_SeasonItem | CollectionFragment_itemsConnection_items_SeriesItem | CollectionFragment_itemsConnection_items_StationItem;

export interface CollectionFragment_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: CollectionFragment_itemsConnection_pageInfo;
  items: CollectionFragment_itemsConnection_items[] | null;
}

export interface CollectionFragment {
  __typename: "EpgCollection" | "FaqCollection" | "GenericCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OnAirCollection" | "OptionCollection" | "PlaceholderCollection" | "PrimeTimeCollection" | "ScheduleCollection" | "SeasonCollection" | "SeriesCollection" | "UserlistCollection" | "VideoCollection";
  attributes: CollectionFragment_attributes | null;
  ctas: CollectionFragment_ctas[] | null;
  id: string | null;
  images: CollectionFragment_images[] | null;
  itemsConnection: CollectionFragment_itemsConnection | null;
  title: string | null;
}
