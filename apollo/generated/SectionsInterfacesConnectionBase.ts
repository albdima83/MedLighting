/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SectionsInterfacesConnectionBase
// ====================================================

export interface SectionsInterfacesConnectionBase_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  endCursor: string | null;
  context: string | null;
}

export interface SectionsInterfacesConnectionBase {
  __typename: "SectionInterfacesConnection";
  pageInfo: SectionsInterfacesConnectionBase_pageInfo;
}
