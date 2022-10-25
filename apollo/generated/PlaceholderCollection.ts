/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CollectionVariant, CollectionTemplate, CollectionLayout, CollectionFlag } from "./globalTypes";

// ====================================================
// GraphQL fragment: PlaceholderCollection
// ====================================================

export interface PlaceholderCollection_attributes {
  __typename: "CollectionAttributes";
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  refreshInterval: number | null;
}

export interface PlaceholderCollection_analyticsContext {
  __typename: "CollectionAnalyticsContext";
  recoTrackId: string | null;
}

export interface PlaceholderCollection_resolverParams {
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

export interface PlaceholderCollection {
  __typename: "PlaceholderCollection";
  id: string | null;
  title: string | null;
  attributes: PlaceholderCollection_attributes | null;
  analyticsContext: PlaceholderCollection_analyticsContext | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client
   */
  resolverType: string;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: PlaceholderCollection_resolverParams[] | null;
}
