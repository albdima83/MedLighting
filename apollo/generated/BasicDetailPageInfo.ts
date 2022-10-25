/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageType, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: BasicDetailPageInfo
// ====================================================

export interface BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection {
  __typename: "EpgCollection" | "FaqCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OnAirCollection" | "OptionCollection" | "PlaceholderCollection" | "PrimeTimeCollection" | "ScheduleCollection" | "SeasonCollection" | "SeriesCollection" | "UserlistCollection" | "VideoCollection";
}

export interface BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_StationItem {
  __typename: "StationItem" | "VideoItem" | "PlaceholderItem" | "SeriesItem" | "SeasonItem" | "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
}

export interface BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem_cardCtas {
  __typename: "VisualLink";
  /**
   * The title of the link
   */
  label: string | null;
  color: HexColorCode | null;
  referenceType: ReferenceType | null;
  referenceId: string | null;
  iconReference: string | null;
  behavior: string | null;
}

export interface BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  id: string | null;
  cardTitle: string | null;
  cardText: string | null;
  promoCodeLabel: string | null;
  cardCtas: BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
}

export type BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items = BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_StationItem | BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem;

export interface BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection {
  __typename: "ItemsConnection";
  items: BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items[] | null;
}

export interface BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection {
  __typename: "GenericCollection";
  id: string | null;
  itemsConnection: BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection | null;
}

export type BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections = BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection | BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection;

export interface BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section {
  __typename: "Section";
  id: string | null;
  collections: (BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section_collections | null)[] | null;
}

export interface BasicDetailPageInfo_landingSectionInterfacesConnection_sections_PlaceholderSection_resolverParams {
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

export interface BasicDetailPageInfo_landingSectionInterfacesConnection_sections_PlaceholderSection {
  __typename: "PlaceholderSection";
  id: string | null;
  title: string | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: BasicDetailPageInfo_landingSectionInterfacesConnection_sections_PlaceholderSection_resolverParams[] | null;
}

export type BasicDetailPageInfo_landingSectionInterfacesConnection_sections = BasicDetailPageInfo_landingSectionInterfacesConnection_sections_Section | BasicDetailPageInfo_landingSectionInterfacesConnection_sections_PlaceholderSection;

export interface BasicDetailPageInfo_landingSectionInterfacesConnection {
  __typename: "SectionInterfacesConnection";
  sections: BasicDetailPageInfo_landingSectionInterfacesConnection_sections[];
}

export interface BasicDetailPageInfo_subscribedCtaLink {
  __typename: "Link";
  referenceType: ReferenceType | null;
  referenceId: string | null;
  behavior: string | null;
}

export interface BasicDetailPageInfo_analyticsContext {
  __typename: "AnalyticsContext";
  pageId: string | null;
  contentId: string | null;
  contentType: string | null;
  publishDate: DateTime | null;
  pageSection: string | null;
  pageSubsection: string | null;
  pageSubsubsection: string | null;
  pageTitle: string | null;
  pageType: string | null;
  pageUrl: URL | null;
  advSiteSection: string | null;
}

export interface BasicDetailPageInfo {
  __typename: "DetailPage";
  id: string;
  type: PageType | null;
  title: string | null;
  requiredChannelRight: string | null;
  option: string | null;
  landingSectionInterfacesConnection: BasicDetailPageInfo_landingSectionInterfacesConnection | null;
  subscribedCtaLink: BasicDetailPageInfo_subscribedCtaLink | null;
  analyticsContext: BasicDetailPageInfo_analyticsContext | null;
}
