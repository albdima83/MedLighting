/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PlaceholderSection
// ====================================================

export interface PlaceholderSection_resolverParams {
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

export interface PlaceholderSection {
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
  resolverParams: PlaceholderSection_resolverParams[] | null;
}
