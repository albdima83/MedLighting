/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CollectionVariant, CollectionTemplate, CollectionLayout, CollectionFlag } from "./globalTypes";

// ====================================================
// GraphQL fragment: UserlistCollection
// ====================================================

export interface UserlistCollection_attributes {
  __typename: "CollectionAttributes";
  variant: CollectionVariant | null;
  template: CollectionTemplate | null;
  layout: CollectionLayout | null;
  flags: CollectionFlag[] | null;
  refreshInterval: number | null;
}

export interface UserlistCollection_analyticsContext {
  __typename: "CollectionAnalyticsContext";
  recoTrackId: string | null;
}

export interface UserlistCollection_resolverParams {
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

export interface UserlistCollection {
  __typename: "UserlistCollection";
  id: string | null;
  title: string | null;
  attributes: UserlistCollection_attributes | null;
  analyticsContext: UserlistCollection_analyticsContext | null;
  /**
   * This is a pre-shared list of types that will need to be handled by the client.
   * Values: 'watchlist' | continue-watching' | 'favourites-series' | 'tvod'
   */
  resolverType: string;
  notLoggedTitle: string | null;
  notLoggedDescription: string | null;
  emptyDescription: string | null;
  emptyTitle: string | null;
  resolved: boolean;
  /**
   * Every resolverType has a definite list of params. This generic list contains them
   */
  resolverParams: UserlistCollection_resolverParams[] | null;
}
