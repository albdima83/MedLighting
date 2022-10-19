/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PlaceholderNavItem
// ====================================================

export interface PlaceholderNavItem_resolverParams {
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

export interface PlaceholderNavItem {
  __typename: "PlaceholderNavItem";
  id: string;
  title: string | null;
  iconReference: string | null;
  /**
   * Disable this entry if the user is not logged
   */
  disableForNotLogged: boolean;
  hideForChannelRights: string[] | null;
  /**
   * Hide this entry if the user is logged
   */
  hideForLogged: boolean;
  /**
   * Hide this entry if the user is not logged
   */
  hideForNotLogged: boolean;
  showForKids: boolean | null;
  resolverType: string;
  resolverParams: PlaceholderNavItem_resolverParams[] | null;
}
