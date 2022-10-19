/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: DetailItemFragment
// ====================================================

export interface DetailItemFragment_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface DetailItemFragment_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type DetailItemFragment_ArticleItem_cardImages = DetailItemFragment_ArticleItem_cardImages_Image | DetailItemFragment_ArticleItem_cardImages_ImagePlaceholder;

export interface DetailItemFragment_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface DetailItemFragment_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_ArticleItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PlaceholderItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "SeasonItem" | "StaticItem" | "StationItem";
  cardTitle: string | null;
  cardText: string | null;
  cardImages: DetailItemFragment_ArticleItem_cardImages[] | null;
  cardAttributes: DetailItemFragment_ArticleItem_cardAttributes | null;
  cardCtas: DetailItemFragment_ArticleItem_cardCtas[] | null;
  cardLink: DetailItemFragment_ArticleItem_cardLink | null;
}

export interface DetailItemFragment_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface DetailItemFragment_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type DetailItemFragment_SeriesItem_cardImages = DetailItemFragment_SeriesItem_cardImages_Image | DetailItemFragment_SeriesItem_cardImages_ImagePlaceholder;

export interface DetailItemFragment_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface DetailItemFragment_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_SeriesItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_SeriesItem_selectedSeason_selectedEpisodeLink {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_SeriesItem_selectedSeason_cardImages_Image {
  __typename: "Image";
}

export interface DetailItemFragment_SeriesItem_selectedSeason_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type DetailItemFragment_SeriesItem_selectedSeason_cardImages = DetailItemFragment_SeriesItem_selectedSeason_cardImages_Image | DetailItemFragment_SeriesItem_selectedSeason_cardImages_ImagePlaceholder;

export interface DetailItemFragment_SeriesItem_selectedSeason_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface DetailItemFragment_SeriesItem_selectedSeason_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_SeriesItem_selectedSeason_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_SeriesItem_selectedSeason_additionalLabel {
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

export interface DetailItemFragment_SeriesItem_selectedSeason {
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
  selectedEpisodeLink: DetailItemFragment_SeriesItem_selectedSeason_selectedEpisodeLink | null;
  cardImages: DetailItemFragment_SeriesItem_selectedSeason_cardImages[] | null;
  cardAttributes: DetailItemFragment_SeriesItem_selectedSeason_cardAttributes | null;
  cardCtas: DetailItemFragment_SeriesItem_selectedSeason_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: DetailItemFragment_SeriesItem_selectedSeason_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: DetailItemFragment_SeriesItem_selectedSeason_additionalLabel | null;
}

export interface DetailItemFragment_SeriesItem_seasons_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_SeriesItem_seasons {
  __typename: "SeasonItem";
  seasonTitle: string | null;
  seasonNumber: number | null;
  /**
   * ID of the related Series
   */
  seriesGuid: string | null;
  cardLink: DetailItemFragment_SeriesItem_seasons_cardLink | null;
}

export interface DetailItemFragment_SeriesItem {
  __typename: "SeriesItem";
  cardTitle: string | null;
  cardText: string | null;
  cardImages: DetailItemFragment_SeriesItem_cardImages[] | null;
  cardAttributes: DetailItemFragment_SeriesItem_cardAttributes | null;
  cardCtas: DetailItemFragment_SeriesItem_cardCtas[] | null;
  cardLink: DetailItemFragment_SeriesItem_cardLink | null;
  genres: string[] | null;
  primaryGenre: string | null;
  rating: string | null;
  editorialMetadata: string | null;
  year: string | null;
  serviceId: string | null;
  /**
   * Represents the currently selected season
   */
  selectedSeason: DetailItemFragment_SeriesItem_selectedSeason | null;
  /**
   * Represents the list of seasons
   */
  seasons: DetailItemFragment_SeriesItem_seasons[] | null;
}

export interface DetailItemFragment_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface DetailItemFragment_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type DetailItemFragment_VideoItem_cardImages = DetailItemFragment_VideoItem_cardImages_Image | DetailItemFragment_VideoItem_cardImages_ImagePlaceholder;

export interface DetailItemFragment_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface DetailItemFragment_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_VideoItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_VideoItem_trailer_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailItemFragment_VideoItem_trailer {
  __typename: "VideoItem";
  cardLink: DetailItemFragment_VideoItem_trailer_cardLink | null;
}

export interface DetailItemFragment_VideoItem {
  __typename: "VideoItem";
  cardTitle: string | null;
  cardText: string | null;
  cardImages: DetailItemFragment_VideoItem_cardImages[] | null;
  cardAttributes: DetailItemFragment_VideoItem_cardAttributes | null;
  cardCtas: DetailItemFragment_VideoItem_cardCtas[] | null;
  cardLink: DetailItemFragment_VideoItem_cardLink | null;
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
  trailer: DetailItemFragment_VideoItem_trailer | null;
  rating: string | null;
  directors: string[] | null;
  actors: string[] | null;
  audioLanguages: string[] | null;
  subLanguages: string[] | null;
}

export type DetailItemFragment = DetailItemFragment_ArticleItem | DetailItemFragment_SeriesItem | DetailItemFragment_VideoItem;
