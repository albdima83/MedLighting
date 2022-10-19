/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlayStaticPage
// ====================================================

export interface MPlayStaticPage_getStaticPage_advContext {
  __typename: "AdvContext";
  adUnit: string | null;
  advSiteSection: string | null;
  fwCallSignSuffix: string | null;
}

export interface MPlayStaticPage_getStaticPage_dataSource_ArticleItem {
  __typename: "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PlaceholderItem" | "PodcastItem" | "RecipeItem" | "SeasonItem" | "SeriesItem" | "StationItem" | "VideoItem";
  title: string | null;
}

export interface MPlayStaticPage_getStaticPage_dataSource_QrCodeItem {
  __typename: "QrCodeItem";
  title: string | null;
  vanityUrl: string;
  actionCreateUrl: any;
}

export interface MPlayStaticPage_getStaticPage_dataSource_StaticItem_cardLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface MPlayStaticPage_getStaticPage_dataSource_StaticItem_content {
  __typename: "HtmlParagraph";
  title: string | null;
  html: string | null;
}

export interface MPlayStaticPage_getStaticPage_dataSource_StaticItem {
  __typename: "StaticItem";
  title: string | null;
  id: string | null;
  cardTitle: string | null;
  cardLink: MPlayStaticPage_getStaticPage_dataSource_StaticItem_cardLink | null;
  content: MPlayStaticPage_getStaticPage_dataSource_StaticItem_content[] | null;
}

export type MPlayStaticPage_getStaticPage_dataSource = MPlayStaticPage_getStaticPage_dataSource_ArticleItem | MPlayStaticPage_getStaticPage_dataSource_QrCodeItem | MPlayStaticPage_getStaticPage_dataSource_StaticItem;

export interface MPlayStaticPage_getStaticPage {
  __typename: "DetailPage";
  id: string;
  title: string | null;
  requiredChannelRight: string | null;
  advContext: MPlayStaticPage_getStaticPage_advContext | null;
  /**
   * This represents the master of the information that has to be rendered by the client
   */
  dataSource: MPlayStaticPage_getStaticPage_dataSource;
}

export interface MPlayStaticPage {
  /**
   * templateName is to be used by MPlay
   */
  getStaticPage: MPlayStaticPage_getStaticPage | null;
}

export interface MPlayStaticPageVariables {
  id: string;
  templateName?: string | null;
}
