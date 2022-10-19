/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageType, LinkType, LinkTarget, ReferenceType, CollectionLayout, CollectionFlag, CollectionVariant, CollectionTemplate } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlaySeriesPage
// ====================================================

export interface MPlaySeriesPage_getSeriesPage_advContext {
  __typename: "AdvContext";
  adUnit: string | null;
  advSiteSection: string | null;
  fwCallSignSuffix: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardImages = MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PlaceholderItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "SeasonItem" | "StaticItem" | "StationItem";
  cardTitle: string | null;
  cardText: string | null;
  cardImages: MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardCtas[] | null;
  cardLink: MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem_cardLink | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardImages = MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_selectedEpisodeLink {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardImages = MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardImages_Image | MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason {
  __typename: "SeasonItem";
  seasonTitle: string | null;
  title: string | null;
  description: string | null;
  genres: string[] | null;
  rating: string | null;
  primaryGenre: string | null;
  expirationDate: any | null;
  actors: string[] | null;
  directors: string[] | null;
  audioLanguages: string[] | null;
  conductors: string[] | null;
  subLanguages: string[] | null;
  editorialMetadata: string | null;
  cardEditorialMetadata: string | null;
  /**
   * Represents the default episode if bookmark is missing
   */
  selectedEpisodeLink: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_selectedEpisodeLink | null;
  cardImages: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_seasons_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_seasons {
  __typename: "SeasonItem";
  seasonTitle: string | null;
  seasonNumber: number | null;
  /**
   * ID of the related Series
   */
  seriesGuid: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_seasons_cardLink | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem {
  __typename: "SeriesItem";
  cardTitle: string | null;
  cardText: string | null;
  cardImages: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardCtas[] | null;
  cardLink: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_cardLink | null;
  genres: string[] | null;
  primaryGenre: string | null;
  rating: string | null;
  editorialMetadata: string | null;
  year: string | null;
  serviceId: string | null;
  /**
   * Represents the currently selected season
   */
  selectedSeason: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_selectedSeason | null;
  /**
   * Represents the list of seasons
   */
  seasons: MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem_seasons[] | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardImages = MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_trailer_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_trailer {
  __typename: "VideoItem";
  cardLink: MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_trailer_cardLink | null;
}

export interface MPlaySeriesPage_getSeriesPage_dataSource_VideoItem {
  __typename: "VideoItem";
  cardTitle: string | null;
  cardText: string | null;
  cardImages: MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardCtas[] | null;
  cardLink: MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_cardLink | null;
  duration: number | null;
  expirationDate: any | null;
  year: string | null;
  country: string | null;
  /**
   * First non_avod content right (SVOD/TVOD)
   */
  contentRight: string | null;
  primaryGenre: string | null;
  /**
   * Trailer
   */
  trailer: MPlaySeriesPage_getSeriesPage_dataSource_VideoItem_trailer | null;
  rating: string | null;
  directors: string[] | null;
  actors: string[] | null;
  audioLanguages: string[] | null;
  subLanguages: string[] | null;
}

export type MPlaySeriesPage_getSeriesPage_dataSource = MPlaySeriesPage_getSeriesPage_dataSource_ArticleItem | MPlaySeriesPage_getSeriesPage_dataSource_SeriesItem | MPlaySeriesPage_getSeriesPage_dataSource_VideoItem;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_ctas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_ArticleItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_GenericItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_LandingItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_PlaceholderItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_VideoItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeasonItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_SeriesItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items_StationItem;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_pageInfo;
  items: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection_items[] | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection {
  __typename: "EpgCollection" | "FaqCollection" | "GenericCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OptionCollection" | "PrimeTimeCollection" | "SeasonCollection" | "SeriesCollection";
  attributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_attributes | null;
  ctas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_ctas[] | null;
  id: string | null;
  images: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_images[] | null;
  itemsConnection: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_ctas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_ArticleItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_GenericItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_LandingItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_PlaceholderItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_VideoItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeasonItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_SeriesItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items_StationItem;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_pageInfo;
  items: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection_items[] | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection {
  __typename: "ScheduleCollection";
  attributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_attributes | null;
  ctas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_ctas[] | null;
  id: string | null;
  images: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_images[] | null;
  itemsConnection: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_ctas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_ArticleItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_GenericItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_LandingItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_PlaceholderItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_VideoItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeasonItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_SeriesItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items_StationItem;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_pageInfo;
  items: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection_items[] | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection {
  __typename: "OnAirCollection";
  attributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_attributes | null;
  ctas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_ctas[] | null;
  id: string | null;
  images: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_images[] | null;
  itemsConnection: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection_itemsConnection | null;
  title: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_ctas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_ArticleItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_GenericItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_LandingItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_PlaceholderItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_VideoItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeasonItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_SeriesItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items_StationItem;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_pageInfo;
  items: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection_items[] | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_resolverParams {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection {
  __typename: "PlaceholderCollection";
  attributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_attributes | null;
  ctas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_ctas[] | null;
  id: string | null;
  images: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_images[] | null;
  itemsConnection: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_itemsConnection | null;
  title: string | null;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_ctas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_ArticleItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_GenericItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_LandingItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_PlaceholderItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_VideoItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeasonItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_SeriesItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items_StationItem;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_pageInfo;
  items: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection_items[] | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_resolverParams {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection {
  __typename: "UserlistCollection";
  attributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_attributes | null;
  ctas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_ctas[] | null;
  id: string | null;
  images: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_images[] | null;
  itemsConnection: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_itemsConnection | null;
  title: string | null;
  resolved: boolean;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection_resolverParams[] | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client.
   * Values: 'watchlist' | continue-watching' | 'favourites-series' | 'tvod'
   */
  resolverType: string;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_attributes {
  __typename: "CollectionAttributes";
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  interval: number | null;
  timeSlideshow: number | null;
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  refreshInterval: number | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_ctas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem {
  __typename: "GenericItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem {
  __typename: "VideoItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem {
  __typename: "SeasonItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem {
  __typename: "SeriesItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem_additionalLabel | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_Image | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages_ImagePlaceholder;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes_bgGradient | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem {
  __typename: "StationItem";
  cardImages: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardImages[] | null;
  cardAttributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardAttributes | null;
  cardCtas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_additionalLabel | null;
  listings: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem_listings[] | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_ArticleItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_GenericItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_LandingItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_PlaceholderItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_VideoItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeasonItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_SeriesItem | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items_StationItem;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection {
  __typename: "ItemsConnection";
  pageInfo: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_pageInfo;
  items: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items[] | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection {
  __typename: "VideoCollection";
  attributes: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_attributes | null;
  ctas: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_ctas[] | null;
  id: string | null;
  images: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_images[] | null;
  itemsConnection: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection | null;
  title: string | null;
  description: string | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_EpgCollection | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_ScheduleCollection | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_OnAirCollection | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_UserlistCollection | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_link {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section {
  __typename: "Section";
  id: string | null;
  collections: (MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_collections | null)[] | null;
  link: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section_link | null;
  title: string | null;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_PlaceholderSection_resolverParams {
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

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_PlaceholderSection {
  __typename: "PlaceholderSection";
  id: string | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_PlaceholderSection_resolverParams[] | null;
}

export type MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections = MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_Section | MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections_PlaceholderSection;

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_pageInfo {
  __typename: "PageInfo";
  context: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
}

export interface MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection {
  __typename: "SectionInterfacesConnection";
  sections: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_sections[];
  pageInfo: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection_pageInfo;
}

export interface MPlaySeriesPage_getSeriesPage {
  __typename: "DetailPage";
  id: string;
  type: PageType | null;
  option: string | null;
  advContext: MPlaySeriesPage_getSeriesPage_advContext | null;
  /**
   * This represents the master of the information that has to be rendered by the client
   */
  dataSource: MPlaySeriesPage_getSeriesPage_dataSource;
  sectionInterfacesConnection: MPlaySeriesPage_getSeriesPage_sectionInterfacesConnection | null;
}

export interface MPlaySeriesPage {
  /**
   * templateName is to be used by MPlay
   */
  getSeriesPage: MPlaySeriesPage_getSeriesPage | null;
}

export interface MPlaySeriesPageVariables {
  id: string;
  templateName?: string | null;
  metadataTemplateName?: string | null;
  first?: number | null;
}
