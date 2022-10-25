/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PageType, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: BasicPageInfo
// ====================================================

export interface BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection {
  __typename: "EpgCollection" | "FaqCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OnAirCollection" | "OptionCollection" | "PlaceholderCollection" | "PrimeTimeCollection" | "ScheduleCollection" | "SeasonCollection" | "SeriesCollection" | "UserlistCollection" | "VideoCollection";
}

export interface BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_StationItem {
  __typename: "StationItem" | "VideoItem" | "PlaceholderItem" | "SeriesItem" | "SeasonItem" | "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
}

export interface BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  id: string | null;
  cardTitle: string | null;
  cardText: string | null;
  promoCodeLabel: string | null;
  cardCtas: BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
}

export type BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items = BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_StationItem | BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem;

export interface BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection {
  __typename: "ItemsConnection";
  items: BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items[] | null;
}

export interface BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection {
  __typename: "GenericCollection";
  id: string | null;
  itemsConnection: BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection | null;
}

export type BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections = BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection | BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection;

export interface BasicPageInfo_landingSectionInterfacesConnection_sections_Section {
  __typename: "Section";
  id: string | null;
  collections: (BasicPageInfo_landingSectionInterfacesConnection_sections_Section_collections | null)[] | null;
}

export interface BasicPageInfo_landingSectionInterfacesConnection_sections_PlaceholderSection_resolverParams {
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

export interface BasicPageInfo_landingSectionInterfacesConnection_sections_PlaceholderSection {
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
  resolverParams: BasicPageInfo_landingSectionInterfacesConnection_sections_PlaceholderSection_resolverParams[] | null;
}

export type BasicPageInfo_landingSectionInterfacesConnection_sections = BasicPageInfo_landingSectionInterfacesConnection_sections_Section | BasicPageInfo_landingSectionInterfacesConnection_sections_PlaceholderSection;

export interface BasicPageInfo_landingSectionInterfacesConnection {
  __typename: "SectionInterfacesConnection";
  sections: BasicPageInfo_landingSectionInterfacesConnection_sections[];
}

export interface BasicPageInfo_subscribedCtaLink {
  __typename: "Link";
  referenceType: ReferenceType | null;
  referenceId: string | null;
  behavior: string | null;
}

export interface BasicPageInfo_analyticsContext {
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

export interface BasicPageInfo {
  __typename: "Page";
  id: string;
  type: PageType | null;
  title: string | null;
  requiredChannelRight: string | null;
  option: string | null;
  landingSectionInterfacesConnection: BasicPageInfo_landingSectionInterfacesConnection | null;
  subscribedCtaLink: BasicPageInfo_subscribedCtaLink | null;
  analyticsContext: BasicPageInfo_analyticsContext | null;
}
