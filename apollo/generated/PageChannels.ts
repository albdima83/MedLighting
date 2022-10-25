/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: PageChannels
// ====================================================

export interface PageChannels_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection {
  __typename: "EpgCollection" | "FaqCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OnAirCollection" | "OptionCollection" | "PlaceholderCollection" | "PrimeTimeCollection" | "ScheduleCollection" | "SeasonCollection" | "SeriesCollection" | "UserlistCollection" | "VideoCollection";
}

export interface PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_StationItem {
  __typename: "StationItem" | "VideoItem" | "PlaceholderItem" | "SeriesItem" | "SeasonItem" | "ArticleItem" | "BreakingItem" | "GalleryItem" | "GenericItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
}

export interface PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem_cardCtas {
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

export interface PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem {
  __typename: "LandingItem";
  id: string | null;
  cardTitle: string | null;
  cardText: string | null;
  promoCodeLabel: string | null;
  cardCtas: PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem_cardCtas[] | null;
}

export type PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items = PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_StationItem | PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items_LandingItem;

export interface PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection {
  __typename: "ItemsConnection";
  items: PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection_items[] | null;
}

export interface PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection {
  __typename: "GenericCollection";
  id: string | null;
  itemsConnection: PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection_itemsConnection | null;
}

export type PageChannels_landingSectionInterfacesConnection_sections_Section_collections = PageChannels_landingSectionInterfacesConnection_sections_Section_collections_EpgCollection | PageChannels_landingSectionInterfacesConnection_sections_Section_collections_GenericCollection;

export interface PageChannels_landingSectionInterfacesConnection_sections_Section {
  __typename: "Section";
  id: string | null;
  collections: (PageChannels_landingSectionInterfacesConnection_sections_Section_collections | null)[] | null;
}

export interface PageChannels_landingSectionInterfacesConnection_sections_PlaceholderSection_resolverParams {
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

export interface PageChannels_landingSectionInterfacesConnection_sections_PlaceholderSection {
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
  resolverParams: PageChannels_landingSectionInterfacesConnection_sections_PlaceholderSection_resolverParams[] | null;
}

export type PageChannels_landingSectionInterfacesConnection_sections = PageChannels_landingSectionInterfacesConnection_sections_Section | PageChannels_landingSectionInterfacesConnection_sections_PlaceholderSection;

export interface PageChannels_landingSectionInterfacesConnection {
  __typename: "SectionInterfacesConnection";
  sections: PageChannels_landingSectionInterfacesConnection_sections[];
}

export interface PageChannels_subscribedCtaLink {
  __typename: "Link";
  referenceType: ReferenceType | null;
  referenceId: string | null;
  behavior: string | null;
}

export interface PageChannels {
  __typename: "DetailPage" | "Page";
  requiredChannelRight: string | null;
  option: string | null;
  landingSectionInterfacesConnection: PageChannels_landingSectionInterfacesConnection | null;
  subscribedCtaLink: PageChannels_subscribedCtaLink | null;
}
