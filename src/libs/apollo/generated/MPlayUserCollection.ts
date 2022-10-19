/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { KeyValueInput, CollectionLayout, CollectionFlag, CollectionVariant, CollectionTemplate, LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlayUserCollection
// ====================================================

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_ctas {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_images_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_images_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_EpgCollection_images = MPlayUserCollection_getUserlistCollection_EpgCollection_images_Image | MPlayUserCollection_getUserlistCollection_EpgCollection_images_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardImages = MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardImages = MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardImages = MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardImages = MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardImages = MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardImages = MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardImages = MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items = MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_ArticleItem | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_GenericItem | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_LandingItem | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_PlaceholderItem | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_VideoItem | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeasonItem | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_SeriesItem | MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items_StationItem;

export interface MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_pageInfo;
  items: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection_items[] | null;
}

export interface MPlayUserCollection_getUserlistCollection_EpgCollection {
  __typename: "EpgCollection" | "FaqCollection" | "GenericCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OptionCollection" | "PrimeTimeCollection" | "ScheduleCollection" | "SeasonCollection" | "SeriesCollection" | "UserlistCollection";
  attributes: MPlayUserCollection_getUserlistCollection_EpgCollection_attributes | null;
  ctas: MPlayUserCollection_getUserlistCollection_EpgCollection_ctas[] | null;
  id: string | null;
  images: MPlayUserCollection_getUserlistCollection_EpgCollection_images[] | null;
  itemsConnection: MPlayUserCollection_getUserlistCollection_EpgCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_ctas {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_images_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_images_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_images = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_images_Image | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_images_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardImages = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items = MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_ArticleItem | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_GenericItem | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_LandingItem | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_PlaceholderItem | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_VideoItem | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeasonItem | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_SeriesItem | MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items_StationItem;

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_pageInfo;
  items: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection_items[] | null;
}

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection_resolverParams {
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

export interface MPlayUserCollection_getUserlistCollection_PlaceholderCollection {
  __typename: "PlaceholderCollection";
  attributes: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_attributes | null;
  ctas: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_ctas[] | null;
  id: string | null;
  images: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_images[] | null;
  itemsConnection: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_itemsConnection | null;
  title: string | null;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlayUserCollection_getUserlistCollection_PlaceholderCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_ctas {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_images_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_images_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_images = MPlayUserCollection_getUserlistCollection_OnAirCollection_images_Image | MPlayUserCollection_getUserlistCollection_OnAirCollection_images_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardImages = MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardImages = MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardImages = MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardImages = MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardImages = MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardImages = MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardImages = MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items = MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_ArticleItem | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_GenericItem | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_LandingItem | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_PlaceholderItem | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_VideoItem | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeasonItem | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_SeriesItem | MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items_StationItem;

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_pageInfo;
  items: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection_items[] | null;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection_stationFiltersV2 {
  __typename: "StationFilter";
  label: string;
}

export interface MPlayUserCollection_getUserlistCollection_OnAirCollection {
  __typename: "OnAirCollection";
  attributes: MPlayUserCollection_getUserlistCollection_OnAirCollection_attributes | null;
  ctas: MPlayUserCollection_getUserlistCollection_OnAirCollection_ctas[] | null;
  id: string | null;
  images: MPlayUserCollection_getUserlistCollection_OnAirCollection_images[] | null;
  itemsConnection: MPlayUserCollection_getUserlistCollection_OnAirCollection_itemsConnection | null;
  title: string | null;
  stationFiltersV2: MPlayUserCollection_getUserlistCollection_OnAirCollection_stationFiltersV2[] | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_ctas {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_images_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_images_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_VideoCollection_images = MPlayUserCollection_getUserlistCollection_VideoCollection_images_Image | MPlayUserCollection_getUserlistCollection_VideoCollection_images_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardImages = MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardImages = MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardImages = MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardImages = MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardImages = MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardImages = MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardImages = MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items = MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_ArticleItem | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_GenericItem | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_LandingItem | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_PlaceholderItem | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_VideoItem | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeasonItem | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_SeriesItem | MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items_StationItem;

export interface MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_pageInfo;
  items: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection_items[] | null;
}

export interface MPlayUserCollection_getUserlistCollection_VideoCollection {
  __typename: "VideoCollection";
  attributes: MPlayUserCollection_getUserlistCollection_VideoCollection_attributes | null;
  ctas: MPlayUserCollection_getUserlistCollection_VideoCollection_ctas[] | null;
  id: string | null;
  images: MPlayUserCollection_getUserlistCollection_VideoCollection_images[] | null;
  itemsConnection: MPlayUserCollection_getUserlistCollection_VideoCollection_itemsConnection | null;
  title: string | null;
  description: string | null;
}

export type MPlayUserCollection_getUserlistCollection = MPlayUserCollection_getUserlistCollection_EpgCollection | MPlayUserCollection_getUserlistCollection_PlaceholderCollection | MPlayUserCollection_getUserlistCollection_OnAirCollection | MPlayUserCollection_getUserlistCollection_VideoCollection;

export interface MPlayUserCollection {
  /**
   * Get a collection. If resolverType && resolverParams are provided the collection will be resolved. Context may be included if passed in the collection pageInfo
   */
  getUserlistCollection: MPlayUserCollection_getUserlistCollection | null;
}

export interface MPlayUserCollectionVariables {
  id: string;
  resolverType?: string | null;
  resolverParams?: KeyValueInput[] | null;
  tvodGuids?: string[] | null;
  first?: number | null;
}
