/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CollectionLayout, CollectionFlag, CollectionVariant, CollectionTemplate, LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: SectionInterfaceFragment
// ====================================================

export interface SectionInterfaceFragment_Section_collections_EpgCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_ctas {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_images = SectionInterfaceFragment_Section_collections_EpgCollection_images_Image | SectionInterfaceFragment_Section_collections_EpgCollection_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_Image | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items = SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_ArticleItem | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_GenericItem | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_LandingItem | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_VideoItem | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeasonItem | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_SeriesItem | SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items_StationItem;

export interface SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_pageInfo;
  items: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection_items[] | null;
}

export interface SectionInterfaceFragment_Section_collections_EpgCollection {
  __typename: "EpgCollection" | "FaqCollection" | "GenericCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OptionCollection" | "PrimeTimeCollection" | "SeasonCollection" | "SeriesCollection";
  attributes: SectionInterfaceFragment_Section_collections_EpgCollection_attributes | null;
  ctas: SectionInterfaceFragment_Section_collections_EpgCollection_ctas[] | null;
  id: string | null;
  images: SectionInterfaceFragment_Section_collections_EpgCollection_images[] | null;
  itemsConnection: SectionInterfaceFragment_Section_collections_EpgCollection_itemsConnection | null;
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_ctas {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_images = SectionInterfaceFragment_Section_collections_ScheduleCollection_images_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_Image | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items = SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem | SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items_StationItem;

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_pageInfo;
  items: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection_items[] | null;
}

export interface SectionInterfaceFragment_Section_collections_ScheduleCollection {
  __typename: "ScheduleCollection";
  attributes: SectionInterfaceFragment_Section_collections_ScheduleCollection_attributes | null;
  ctas: SectionInterfaceFragment_Section_collections_ScheduleCollection_ctas[] | null;
  id: string | null;
  images: SectionInterfaceFragment_Section_collections_ScheduleCollection_images[] | null;
  itemsConnection: SectionInterfaceFragment_Section_collections_ScheduleCollection_itemsConnection | null;
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_ctas {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_images = SectionInterfaceFragment_Section_collections_OnAirCollection_images_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_Image | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items = SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_GenericItem | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_LandingItem | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_VideoItem | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem | SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items_StationItem;

export interface SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_pageInfo;
  items: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection_items[] | null;
}

export interface SectionInterfaceFragment_Section_collections_OnAirCollection {
  __typename: "OnAirCollection";
  attributes: SectionInterfaceFragment_Section_collections_OnAirCollection_attributes | null;
  ctas: SectionInterfaceFragment_Section_collections_OnAirCollection_ctas[] | null;
  id: string | null;
  images: SectionInterfaceFragment_Section_collections_OnAirCollection_images[] | null;
  itemsConnection: SectionInterfaceFragment_Section_collections_OnAirCollection_itemsConnection | null;
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_ctas {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_images = SectionInterfaceFragment_Section_collections_PlaceholderCollection_images_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_Image | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items = SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem | SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem;

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_pageInfo;
  items: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection_items[] | null;
}

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection_resolverParams {
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

export interface SectionInterfaceFragment_Section_collections_PlaceholderCollection {
  __typename: "PlaceholderCollection";
  attributes: SectionInterfaceFragment_Section_collections_PlaceholderCollection_attributes | null;
  ctas: SectionInterfaceFragment_Section_collections_PlaceholderCollection_ctas[] | null;
  id: string | null;
  images: SectionInterfaceFragment_Section_collections_PlaceholderCollection_images[] | null;
  itemsConnection: SectionInterfaceFragment_Section_collections_PlaceholderCollection_itemsConnection | null;
  title: string | null;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: SectionInterfaceFragment_Section_collections_PlaceholderCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_ctas {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_images = SectionInterfaceFragment_Section_collections_UserlistCollection_images_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_Image | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items = SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_GenericItem | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_LandingItem | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_VideoItem | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem | SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items_StationItem;

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_pageInfo;
  items: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection_items[] | null;
}

export interface SectionInterfaceFragment_Section_collections_UserlistCollection_resolverParams {
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

export interface SectionInterfaceFragment_Section_collections_UserlistCollection {
  __typename: "UserlistCollection";
  attributes: SectionInterfaceFragment_Section_collections_UserlistCollection_attributes | null;
  ctas: SectionInterfaceFragment_Section_collections_UserlistCollection_ctas[] | null;
  id: string | null;
  images: SectionInterfaceFragment_Section_collections_UserlistCollection_images[] | null;
  itemsConnection: SectionInterfaceFragment_Section_collections_UserlistCollection_itemsConnection | null;
  title: string | null;
  resolved: boolean;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: SectionInterfaceFragment_Section_collections_UserlistCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client.
   * Values: 'watchlist' | continue-watching' | 'favourites-series' | 'tvod'
   */
  resolverType: string;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_ctas {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_images = SectionInterfaceFragment_Section_collections_VideoCollection_images_Image | SectionInterfaceFragment_Section_collections_VideoCollection_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink {
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

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel {
  __typename: "Label";
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_Image | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items = SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_ArticleItem | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_GenericItem | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_LandingItem | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_VideoItem | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeasonItem | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_SeriesItem | SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items_StationItem;

export interface SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_pageInfo;
  items: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection_items[] | null;
}

export interface SectionInterfaceFragment_Section_collections_VideoCollection {
  __typename: "VideoCollection";
  attributes: SectionInterfaceFragment_Section_collections_VideoCollection_attributes | null;
  ctas: SectionInterfaceFragment_Section_collections_VideoCollection_ctas[] | null;
  id: string | null;
  images: SectionInterfaceFragment_Section_collections_VideoCollection_images[] | null;
  itemsConnection: SectionInterfaceFragment_Section_collections_VideoCollection_itemsConnection | null;
  title: string | null;
  description: string | null;
}

export type SectionInterfaceFragment_Section_collections = SectionInterfaceFragment_Section_collections_EpgCollection | SectionInterfaceFragment_Section_collections_ScheduleCollection | SectionInterfaceFragment_Section_collections_OnAirCollection | SectionInterfaceFragment_Section_collections_PlaceholderCollection | SectionInterfaceFragment_Section_collections_UserlistCollection | SectionInterfaceFragment_Section_collections_VideoCollection;

export interface SectionInterfaceFragment_Section_link {
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

export interface SectionInterfaceFragment_Section {
  __typename: "Section";
  id: string | null;
  collections: (SectionInterfaceFragment_Section_collections | null)[] | null;
  link: SectionInterfaceFragment_Section_link | null;
  title: string | null;
}

export interface SectionInterfaceFragment_PlaceholderSection_resolverParams {
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

export interface SectionInterfaceFragment_PlaceholderSection {
  __typename: "PlaceholderSection";
  id: string | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: SectionInterfaceFragment_PlaceholderSection_resolverParams[] | null;
}

export type SectionInterfaceFragment = SectionInterfaceFragment_Section | SectionInterfaceFragment_PlaceholderSection;
