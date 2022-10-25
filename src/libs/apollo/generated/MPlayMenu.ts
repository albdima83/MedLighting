/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlayMenu
// ====================================================

export interface MPlayMenu_getNav_items_items_NavItem_link {
  __typename: "Link";
  referenceId: string | null;
  referenceType: ReferenceType | null;
}

export interface MPlayMenu_getNav_items_items_NavItem {
  __typename: "NavItem";
  id: string;
  title: string | null;
  icon: any | null;
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
  link: MPlayMenu_getNav_items_items_NavItem_link | null;
}

export interface MPlayMenu_getNav_items_items_PlaceholderNavItem_resolverParams {
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

export interface MPlayMenu_getNav_items_items_PlaceholderNavItem {
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
  resolverParams: MPlayMenu_getNav_items_items_PlaceholderNavItem_resolverParams[] | null;
}

export type MPlayMenu_getNav_items_items = MPlayMenu_getNav_items_items_NavItem | MPlayMenu_getNav_items_items_PlaceholderNavItem;

export interface MPlayMenu_getNav_items {
  __typename: "Nav" | "PlaceholderNav";
  id: string | null;
  showForKids: boolean | null;
  showForChannelRights: string[] | null;
  hideForChannelRights: string[] | null;
  items: MPlayMenu_getNav_items_items[] | null;
}

export interface MPlayMenu_getNav {
  __typename: "NavBar";
  items: MPlayMenu_getNav_items[] | null;
}

export interface MPlayMenu {
  /**
   * NOTE: this calls ignores the User attribute inside the Context for loggedIn/Paying, for now
   */
  getNav: MPlayMenu_getNav | null;
}

export interface MPlayMenuVariables {
  id: string;
}
