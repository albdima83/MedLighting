/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: NavItemFragment
// ====================================================

export interface NavItemFragment_link {
  __typename: "Link";
  referenceId: string | null;
  referenceType: ReferenceType | null;
}

export interface NavItemFragment {
  __typename: "NavItem";
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
  link: NavItemFragment_link | null;
}
