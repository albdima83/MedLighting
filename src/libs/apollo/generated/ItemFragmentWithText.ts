/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ItemFragmentWithText
// ====================================================

export interface ItemFragmentWithText_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragmentWithText_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragmentWithText_ArticleItem_cardImages = ItemFragmentWithText_ArticleItem_cardImages_Image | ItemFragmentWithText_ArticleItem_cardImages_ImagePlaceholder;

export interface ItemFragmentWithText_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragmentWithText_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_ArticleItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: ItemFragmentWithText_ArticleItem_cardImages[] | null;
  cardAttributes: ItemFragmentWithText_ArticleItem_cardAttributes | null;
  cardCtas: ItemFragmentWithText_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragmentWithText_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface ItemFragmentWithText_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragmentWithText_GenericItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragmentWithText_GenericItem_cardImages = ItemFragmentWithText_GenericItem_cardImages_Image | ItemFragmentWithText_GenericItem_cardImages_ImagePlaceholder;

export interface ItemFragmentWithText_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragmentWithText_GenericItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_GenericItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_GenericItem_additionalLabel {
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

export interface ItemFragmentWithText_GenericItem {
  __typename: "GenericItem";
  cardImages: ItemFragmentWithText_GenericItem_cardImages[] | null;
  cardAttributes: ItemFragmentWithText_GenericItem_cardAttributes | null;
  cardCtas: ItemFragmentWithText_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragmentWithText_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: ItemFragmentWithText_GenericItem_additionalLabel | null;
}

export interface ItemFragmentWithText_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragmentWithText_LandingItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragmentWithText_LandingItem_cardImages = ItemFragmentWithText_LandingItem_cardImages_Image | ItemFragmentWithText_LandingItem_cardImages_ImagePlaceholder;

export interface ItemFragmentWithText_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragmentWithText_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_LandingItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_LandingItem {
  __typename: "LandingItem";
  cardImages: ItemFragmentWithText_LandingItem_cardImages[] | null;
  cardAttributes: ItemFragmentWithText_LandingItem_cardAttributes | null;
  cardCtas: ItemFragmentWithText_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragmentWithText_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface ItemFragmentWithText_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragmentWithText_PlaceholderItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragmentWithText_PlaceholderItem_cardImages = ItemFragmentWithText_PlaceholderItem_cardImages_Image | ItemFragmentWithText_PlaceholderItem_cardImages_ImagePlaceholder;

export interface ItemFragmentWithText_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragmentWithText_PlaceholderItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_PlaceholderItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: ItemFragmentWithText_PlaceholderItem_cardImages[] | null;
  cardAttributes: ItemFragmentWithText_PlaceholderItem_cardAttributes | null;
  cardCtas: ItemFragmentWithText_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragmentWithText_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface ItemFragmentWithText_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragmentWithText_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragmentWithText_VideoItem_cardImages = ItemFragmentWithText_VideoItem_cardImages_Image | ItemFragmentWithText_VideoItem_cardImages_ImagePlaceholder;

export interface ItemFragmentWithText_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragmentWithText_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_VideoItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_VideoItem_additionalLabel {
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

export interface ItemFragmentWithText_VideoItem {
  __typename: "VideoItem";
  cardImages: ItemFragmentWithText_VideoItem_cardImages[] | null;
  cardAttributes: ItemFragmentWithText_VideoItem_cardAttributes | null;
  cardCtas: ItemFragmentWithText_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragmentWithText_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: ItemFragmentWithText_VideoItem_additionalLabel | null;
}

export interface ItemFragmentWithText_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragmentWithText_SeasonItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragmentWithText_SeasonItem_cardImages = ItemFragmentWithText_SeasonItem_cardImages_Image | ItemFragmentWithText_SeasonItem_cardImages_ImagePlaceholder;

export interface ItemFragmentWithText_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragmentWithText_SeasonItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_SeasonItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_SeasonItem_additionalLabel {
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

export interface ItemFragmentWithText_SeasonItem {
  __typename: "SeasonItem";
  cardImages: ItemFragmentWithText_SeasonItem_cardImages[] | null;
  cardAttributes: ItemFragmentWithText_SeasonItem_cardAttributes | null;
  cardCtas: ItemFragmentWithText_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragmentWithText_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: ItemFragmentWithText_SeasonItem_additionalLabel | null;
}

export interface ItemFragmentWithText_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragmentWithText_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragmentWithText_SeriesItem_cardImages = ItemFragmentWithText_SeriesItem_cardImages_Image | ItemFragmentWithText_SeriesItem_cardImages_ImagePlaceholder;

export interface ItemFragmentWithText_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragmentWithText_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_SeriesItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_SeriesItem_additionalLabel {
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

export interface ItemFragmentWithText_SeriesItem {
  __typename: "SeriesItem";
  cardImages: ItemFragmentWithText_SeriesItem_cardImages[] | null;
  cardAttributes: ItemFragmentWithText_SeriesItem_cardAttributes | null;
  cardCtas: ItemFragmentWithText_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragmentWithText_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: ItemFragmentWithText_SeriesItem_additionalLabel | null;
}

export interface ItemFragmentWithText_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragmentWithText_StationItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragmentWithText_StationItem_cardImages = ItemFragmentWithText_StationItem_cardImages_Image | ItemFragmentWithText_StationItem_cardImages_ImagePlaceholder;

export interface ItemFragmentWithText_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface ItemFragmentWithText_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: ItemFragmentWithText_StationItem_cardAttributes_bgGradient | null;
}

export interface ItemFragmentWithText_StationItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_StationItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragmentWithText_StationItem_additionalLabel {
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

export interface ItemFragmentWithText_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface ItemFragmentWithText_StationItem {
  __typename: "StationItem";
  cardImages: ItemFragmentWithText_StationItem_cardImages[] | null;
  cardAttributes: ItemFragmentWithText_StationItem_cardAttributes | null;
  cardCtas: ItemFragmentWithText_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragmentWithText_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: ItemFragmentWithText_StationItem_additionalLabel | null;
  listings: ItemFragmentWithText_StationItem_listings[] | null;
}

export type ItemFragmentWithText = ItemFragmentWithText_ArticleItem | ItemFragmentWithText_GenericItem | ItemFragmentWithText_LandingItem | ItemFragmentWithText_PlaceholderItem | ItemFragmentWithText_VideoItem | ItemFragmentWithText_SeasonItem | ItemFragmentWithText_SeriesItem | ItemFragmentWithText_StationItem;
