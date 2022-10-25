/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CollectionVariant, CollectionTemplate, CollectionLayout, CollectionFlag } from "./globalTypes";

// ====================================================
// GraphQL fragment: CollectionBase
// ====================================================

export interface CollectionBase_attributes {
  __typename: "CollectionAttributes";
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  refreshInterval: number | null;
}

export interface CollectionBase_analyticsContext {
  __typename: "CollectionAnalyticsContext";
  recoTrackId: string | null;
}

export interface CollectionBase {
  __typename: "EpgCollection" | "FaqCollection" | "GenericCollection" | "HeroCollection" | "LivePreviewCollection" | "MixedCollection" | "MovieCollection" | "NavCollection" | "OnAirCollection" | "OptionCollection" | "PlaceholderCollection" | "PrimeTimeCollection" | "ScheduleCollection" | "SeasonCollection" | "SeriesCollection" | "UserlistCollection" | "VideoCollection";
  id: string | null;
  title: string | null;
  attributes: CollectionBase_attributes | null;
  analyticsContext: CollectionBase_analyticsContext | null;
}
