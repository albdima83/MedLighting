/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CardPlayer
// ====================================================

export interface CardPlayer_advContext {
  __typename: "ItemAdvContext";
  /**
   * Used for players
   */
  advSiteSection: string | null;
  fwCallSignSuffix: string | null;
}

export interface CardPlayer_analyticsContext {
  __typename: "ItemAnalyticsContext";
  contentId: string | null;
  trackId: string | null;
}

export interface CardPlayer {
  __typename: "CardPlayer";
  guid: string | null;
  callSign: string | null;
  previewTimeout: number | null;
  advContext: CardPlayer_advContext | null;
  analyticsContext: CardPlayer_analyticsContext | null;
}
