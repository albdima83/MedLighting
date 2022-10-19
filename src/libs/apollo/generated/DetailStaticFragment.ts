/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: DetailStaticFragment
// ====================================================

export interface DetailStaticFragment_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PlaceholderItem" | "PodcastItem" | "RecipeItem" | "SeasonItem" | "SeriesItem" | "StationItem" | "VideoItem";
  title: string | null;
}

export interface DetailStaticFragment_QrCodeItem {
  __typename: "QrCodeItem";
  title: string | null;
  vanityUrl: string;
  actionCreateUrl: any;
}

export interface DetailStaticFragment_StaticItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface DetailStaticFragment_StaticItem_content {
  __typename: "HtmlParagraph";
  title: string | null;
  html: string | null;
}

export interface DetailStaticFragment_StaticItem {
  __typename: "StaticItem";
  title: string | null;
  id: string | null;
  cardTitle: string | null;
  cardLink: DetailStaticFragment_StaticItem_cardLink | null;
  content: DetailStaticFragment_StaticItem_content[] | null;
}

export type DetailStaticFragment = DetailStaticFragment_ArticleItem | DetailStaticFragment_QrCodeItem | DetailStaticFragment_StaticItem;
