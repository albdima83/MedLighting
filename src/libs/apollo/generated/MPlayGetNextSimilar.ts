/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { KeyValueInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlayGetNextSimilar
// ====================================================

export interface MPlayGetNextSimilar_getNextSimilar_analyticsContext {
  __typename: "ItemAnalyticsContext";
  contentId: string | null;
  trackId: string | null;
}

export interface MPlayGetNextSimilar_getNextSimilar {
  __typename: "VideoItem";
  guid: string;
  callSign: string | null;
  analyticsContext: MPlayGetNextSimilar_getNextSimilar_analyticsContext | null;
}

export interface MPlayGetNextSimilar {
  /**
   * Retrieves next similar video.
   */
  getNextSimilar: MPlayGetNextSimilar_getNextSimilar | null;
}

export interface MPlayGetNextSimilarVariables {
  id: string;
  resolverParams: KeyValueInput[];
}
