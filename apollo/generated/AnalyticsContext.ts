/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AnalyticsContext
// ====================================================

export interface AnalyticsContext_analyticsContext {
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

export interface AnalyticsContext {
  __typename: "DetailPage" | "Page";
  analyticsContext: AnalyticsContext_analyticsContext | null;
}
