/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageType, CollectionLayout, CollectionFlag, CollectionVariant, CollectionTemplate, LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlaySearchPage
// ====================================================

export interface MPlaySearchPage_getSearchPage_advContext {
  __typename: "AdvContext";
  adUnit: string | null;
  advSiteSection: string | null;
  fwCallSignSuffix: string | null;
}

export interface MPlaySearchPage_getSearchPage_analyticsContext {
  __typename: "AnalyticsContext";
  advSiteSection: string | null;
  contentId: string | null;
  brand: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_ctas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_pageInfo;
  items: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items[] | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection {
  __typename: "EpgCollection" | "FaqCollection" | "GenericCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OptionCollection" | "PrimeTimeCollection" | "SeasonCollection" | "SeriesCollection";
  attributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_attributes | null;
  ctas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_ctas[] | null;
  id: string | null;
  images: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images[] | null;
  itemsConnection: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_ctas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_pageInfo;
  items: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items[] | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection {
  __typename: "ScheduleCollection";
  attributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_attributes | null;
  ctas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_ctas[] | null;
  id: string | null;
  images: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images[] | null;
  itemsConnection: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_ctas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_pageInfo;
  items: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items[] | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection {
  __typename: "OnAirCollection";
  attributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_attributes | null;
  ctas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_ctas[] | null;
  id: string | null;
  images: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images[] | null;
  itemsConnection: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_ctas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_pageInfo;
  items: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items[] | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_resolverParams {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection {
  __typename: "PlaceholderCollection";
  attributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_attributes | null;
  ctas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_ctas[] | null;
  id: string | null;
  images: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images[] | null;
  itemsConnection: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection | null;
  title: string | null;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_ctas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_pageInfo;
  items: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items[] | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_resolverParams {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection {
  __typename: "UserlistCollection";
  attributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_attributes | null;
  ctas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_ctas[] | null;
  id: string | null;
  images: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images[] | null;
  itemsConnection: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection | null;
  title: string | null;
  resolved: boolean;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client.
   * Values: 'watchlist' | continue-watching' | 'favourites-series' | 'tvod'
   */
  resolverType: string;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_ctas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
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

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_pageInfo;
  items: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items[] | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection {
  __typename: "VideoCollection";
  attributes: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_attributes | null;
  ctas: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_ctas[] | null;
  id: string | null;
  images: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images[] | null;
  itemsConnection: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection | null;
  title: string | null;
  description: string | null;
}

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_link {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section {
  __typename: "Section";
  id: string | null;
  collections: (MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_collections | null)[] | null;
  link: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section_link | null;
  title: string | null;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_PlaceholderSection_resolverParams {
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

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_PlaceholderSection {
  __typename: "PlaceholderSection";
  id: string | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_PlaceholderSection_resolverParams[] | null;
}

export type MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections = MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_Section | MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections_PlaceholderSection;

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySearchPage_getSearchPage_sectionInterfacesConnection {
  __typename: "SectionInterfacesConnection";
  sections: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_sections[];
  pageInfo: MPlaySearchPage_getSearchPage_sectionInterfacesConnection_pageInfo;
}

export interface MPlaySearchPage_getSearchPage {
  __typename: "Page";
  id: string;
  type: PageType | null;
  title: string | null;
  option: string | null;
  advContext: MPlaySearchPage_getSearchPage_advContext | null;
  analyticsContext: MPlaySearchPage_getSearchPage_analyticsContext | null;
  sectionInterfacesConnection: MPlaySearchPage_getSearchPage_sectionInterfacesConnection | null;
}

export interface MPlaySearchPage {
  /**
   * Search
   */
  getSearchPage: MPlaySearchPage_getSearchPage | null;
}

export interface MPlaySearchPageVariables {
  query?: string | null;
  channel?: string | null;
  uxReference: string;
  property?: string | null;
  first?: number | null;
}
