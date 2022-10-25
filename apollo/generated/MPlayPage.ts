/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageType, CollectionLayout, CollectionFlag, CollectionVariant, CollectionTemplate, LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlayPage
// ====================================================

export interface MPlayPage_getPage_advContext {
  __typename: "AdvContext";
  adUnit: string | null;
  advSiteSection: string | null;
  fwCallSignSuffix: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_ctas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection {
  __typename: "EpgCollection" | "FaqCollection" | "GenericCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OptionCollection" | "PrimeTimeCollection" | "SeasonCollection" | "SeriesCollection";
  attributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_attributes | null;
  ctas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_ctas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection {
  __typename: "ScheduleCollection";
  attributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_attributes | null;
  ctas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_ctas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection {
  __typename: "OnAirCollection";
  attributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_attributes | null;
  ctas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_ctas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_resolverParams {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection {
  __typename: "PlaceholderCollection";
  attributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_attributes | null;
  ctas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection | null;
  title: string | null;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_ctas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_resolverParams {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection {
  __typename: "UserlistCollection";
  attributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_attributes | null;
  ctas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection | null;
  title: string | null;
  resolved: boolean;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client.
   * Values: 'watchlist' | continue-watching' | 'favourites-series' | 'tvod'
   */
  resolverType: string;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_ctas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection {
  __typename: "VideoCollection";
  attributes: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_attributes | null;
  ctas: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection | null;
  title: string | null;
  description: string | null;
}

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_ScheduleCollection | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_OnAirCollection | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_PlaceholderCollection | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_UserlistCollection | MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections_VideoCollection;

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_link {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section {
  __typename: "Section";
  id: string | null;
  collections: (MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_collections | null)[] | null;
  link: MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section_link | null;
  title: string | null;
}

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_PlaceholderSection_resolverParams {
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

export interface MPlayPage_getPage_landingSectionInterfacesConnection_sections_PlaceholderSection {
  __typename: "PlaceholderSection";
  id: string | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlayPage_getPage_landingSectionInterfacesConnection_sections_PlaceholderSection_resolverParams[] | null;
}

export type MPlayPage_getPage_landingSectionInterfacesConnection_sections = MPlayPage_getPage_landingSectionInterfacesConnection_sections_Section | MPlayPage_getPage_landingSectionInterfacesConnection_sections_PlaceholderSection;

export interface MPlayPage_getPage_landingSectionInterfacesConnection {
  __typename: "SectionInterfacesConnection";
  sections: MPlayPage_getPage_landingSectionInterfacesConnection_sections[];
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_ctas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection {
  __typename: "EpgCollection" | "FaqCollection" | "GenericCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OptionCollection" | "PrimeTimeCollection" | "SeasonCollection" | "SeriesCollection";
  attributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_attributes | null;
  ctas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_ctas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection {
  __typename: "ScheduleCollection";
  attributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_attributes | null;
  ctas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_ctas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection {
  __typename: "OnAirCollection";
  attributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_attributes | null;
  ctas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_ctas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_resolverParams {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection {
  __typename: "PlaceholderCollection";
  attributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_attributes | null;
  ctas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection | null;
  title: string | null;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_ctas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_resolverParams {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection {
  __typename: "UserlistCollection";
  attributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_attributes | null;
  ctas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection | null;
  title: string | null;
  resolved: boolean;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client.
   * Values: 'watchlist' | continue-watching' | 'favourites-series' | 'tvod'
   */
  resolverType: string;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_ctas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: HexColorCode;
  startColor: HexColorCode;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: HexColorCode | null;
  bgGradient: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_Image {
  __typename: "Image";
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder {
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

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_Image | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images_ImagePlaceholder;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: DateTime | null;
  endTime: DateTime | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings_images[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_pageInfo;
  items: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items[] | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection {
  __typename: "VideoCollection";
  attributes: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_attributes | null;
  ctas: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_ctas[] | null;
  id: string | null;
  images: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images[] | null;
  itemsConnection: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection | null;
  title: string | null;
  description: string | null;
}

export type MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections = MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection | MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection;

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section_link {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_Section {
  __typename: "Section";
  id: string | null;
  collections: (MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections | null)[] | null;
  link: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_link | null;
  title: string | null;
}

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_PlaceholderSection_resolverParams {
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

export interface MPlayPage_getPage_sectionInterfacesConnection_sections_PlaceholderSection {
  __typename: "PlaceholderSection";
  id: string | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlayPage_getPage_sectionInterfacesConnection_sections_PlaceholderSection_resolverParams[] | null;
}

export type MPlayPage_getPage_sectionInterfacesConnection_sections = MPlayPage_getPage_sectionInterfacesConnection_sections_Section | MPlayPage_getPage_sectionInterfacesConnection_sections_PlaceholderSection;

export interface MPlayPage_getPage_sectionInterfacesConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlayPage_getPage_sectionInterfacesConnection {
  __typename: "SectionInterfacesConnection";
  sections: MPlayPage_getPage_sectionInterfacesConnection_sections[];
  pageInfo: MPlayPage_getPage_sectionInterfacesConnection_pageInfo;
}

export interface MPlayPage_getPage {
  __typename: "Page";
  id: string;
  type: PageType | null;
  lastModified: DateTime | null;
  option: string | null;
  requiredChannelRight: string | null;
  advContext: MPlayPage_getPage_advContext | null;
  landingSectionInterfacesConnection: MPlayPage_getPage_landingSectionInterfacesConnection | null;
  sectionInterfacesConnection: MPlayPage_getPage_sectionInterfacesConnection | null;
}

export interface MPlayPage {
  /**
   * id maps to `{type}/{id}` on DDG and to `{entryId}` on Accedo
   */
  getPage: MPlayPage_getPage | null;
}

export interface MPlayPageVariables {
  id: string;
  first?: number | null;
}
