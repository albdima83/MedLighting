/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ItemFragment
// ====================================================

export interface ItemFragment_ArticleItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragment_ArticleItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragment_ArticleItem_cardImages = ItemFragment_ArticleItem_cardImages_Image | ItemFragment_ArticleItem_cardImages_ImagePlaceholder;

export interface ItemFragment_ArticleItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragment_ArticleItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_ArticleItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
  cardImages: ItemFragment_ArticleItem_cardImages[] | null;
  cardAttributes: ItemFragment_ArticleItem_cardAttributes | null;
  cardCtas: ItemFragment_ArticleItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragment_ArticleItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface ItemFragment_GenericItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragment_GenericItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragment_GenericItem_cardImages = ItemFragment_GenericItem_cardImages_Image | ItemFragment_GenericItem_cardImages_ImagePlaceholder;

export interface ItemFragment_GenericItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragment_GenericItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_GenericItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_GenericItem_additionalLabel {
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

export interface ItemFragment_GenericItem {
  __typename: "GenericItem";
  cardImages: ItemFragment_GenericItem_cardImages[] | null;
  cardAttributes: ItemFragment_GenericItem_cardAttributes | null;
  cardCtas: ItemFragment_GenericItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragment_GenericItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: ItemFragment_GenericItem_additionalLabel | null;
}

export interface ItemFragment_LandingItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragment_LandingItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragment_LandingItem_cardImages = ItemFragment_LandingItem_cardImages_Image | ItemFragment_LandingItem_cardImages_ImagePlaceholder;

export interface ItemFragment_LandingItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragment_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_LandingItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_LandingItem {
  __typename: "LandingItem";
  cardImages: ItemFragment_LandingItem_cardImages[] | null;
  cardAttributes: ItemFragment_LandingItem_cardAttributes | null;
  cardCtas: ItemFragment_LandingItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragment_LandingItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
}

export interface ItemFragment_PlaceholderItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragment_PlaceholderItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragment_PlaceholderItem_cardImages = ItemFragment_PlaceholderItem_cardImages_Image | ItemFragment_PlaceholderItem_cardImages_ImagePlaceholder;

export interface ItemFragment_PlaceholderItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragment_PlaceholderItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_PlaceholderItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_PlaceholderItem {
  __typename: "PlaceholderItem";
  cardImages: ItemFragment_PlaceholderItem_cardImages[] | null;
  cardAttributes: ItemFragment_PlaceholderItem_cardAttributes | null;
  cardCtas: ItemFragment_PlaceholderItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragment_PlaceholderItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  resolverType: string;
}

export interface ItemFragment_VideoItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragment_VideoItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragment_VideoItem_cardImages = ItemFragment_VideoItem_cardImages_Image | ItemFragment_VideoItem_cardImages_ImagePlaceholder;

export interface ItemFragment_VideoItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragment_VideoItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_VideoItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_VideoItem_additionalLabel {
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

export interface ItemFragment_VideoItem {
  __typename: "VideoItem";
  cardImages: ItemFragment_VideoItem_cardImages[] | null;
  cardAttributes: ItemFragment_VideoItem_cardAttributes | null;
  cardCtas: ItemFragment_VideoItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragment_VideoItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  /**
   * id CMS vertical
   */
  id: string | null;
  editorialType: string | null;
  seasonTitle: string | null;
  additionalLabel: ItemFragment_VideoItem_additionalLabel | null;
}

export interface ItemFragment_SeasonItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragment_SeasonItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragment_SeasonItem_cardImages = ItemFragment_SeasonItem_cardImages_Image | ItemFragment_SeasonItem_cardImages_ImagePlaceholder;

export interface ItemFragment_SeasonItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragment_SeasonItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_SeasonItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_SeasonItem_additionalLabel {
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

export interface ItemFragment_SeasonItem {
  __typename: "SeasonItem";
  cardImages: ItemFragment_SeasonItem_cardImages[] | null;
  cardAttributes: ItemFragment_SeasonItem_cardAttributes | null;
  cardCtas: ItemFragment_SeasonItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragment_SeasonItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: ItemFragment_SeasonItem_additionalLabel | null;
}

export interface ItemFragment_SeriesItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragment_SeriesItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragment_SeriesItem_cardImages = ItemFragment_SeriesItem_cardImages_Image | ItemFragment_SeriesItem_cardImages_ImagePlaceholder;

export interface ItemFragment_SeriesItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
}

export interface ItemFragment_SeriesItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_SeriesItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_SeriesItem_additionalLabel {
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

export interface ItemFragment_SeriesItem {
  __typename: "SeriesItem";
  cardImages: ItemFragment_SeriesItem_cardImages[] | null;
  cardAttributes: ItemFragment_SeriesItem_cardAttributes | null;
  cardCtas: ItemFragment_SeriesItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragment_SeriesItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: ItemFragment_SeriesItem_additionalLabel | null;
}

export interface ItemFragment_StationItem_cardImages_Image {
  __typename: "Image";
}

export interface ItemFragment_StationItem_cardImages_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  agency: string | null;
  id: string;
  engine: string;
  type: string;
  r: string;
  /**
   * Low Quality Image Placeholder. TBD
   */
  imagePreview: string | null;
}

export type ItemFragment_StationItem_cardImages = ItemFragment_StationItem_cardImages_Image | ItemFragment_StationItem_cardImages_ImagePlaceholder;

export interface ItemFragment_StationItem_cardAttributes_bgGradient {
  __typename: "Gradient";
  angle: number | null;
  endColor: any;
  startColor: any;
}

export interface ItemFragment_StationItem_cardAttributes {
  __typename: "CardAttributes";
  textColor: any | null;
  bgGradient: ItemFragment_StationItem_cardAttributes_bgGradient | null;
}

export interface ItemFragment_StationItem_cardCtas {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_StationItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface ItemFragment_StationItem_additionalLabel {
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

export interface ItemFragment_StationItem_listings {
  __typename: "Listing";
  startTime: any | null;
  endTime: any | null;
  guid: string | null;
  restartAllowed: boolean | null;
  liveAllowed: boolean | null;
  title: string | null;
  description: string | null;
}

export interface ItemFragment_StationItem {
  __typename: "StationItem";
  cardImages: ItemFragment_StationItem_cardImages[] | null;
  cardAttributes: ItemFragment_StationItem_cardAttributes | null;
  cardCtas: ItemFragment_StationItem_cardCtas[] | null;
  cardEyelet: string | null;
  cardLink: ItemFragment_StationItem_cardLink | null;
  cardTitle: string | null;
  cardText: string | null;
  id: string | null;
  additionalLabel: ItemFragment_StationItem_additionalLabel | null;
  listings: ItemFragment_StationItem_listings[] | null;
}

export type ItemFragment = ItemFragment_ArticleItem | ItemFragment_GenericItem | ItemFragment_LandingItem | ItemFragment_PlaceholderItem | ItemFragment_VideoItem | ItemFragment_SeasonItem | ItemFragment_SeriesItem | ItemFragment_StationItem;
