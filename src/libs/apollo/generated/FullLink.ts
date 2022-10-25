/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReferenceType, LinkType, LinkTarget } from "./globalTypes";

// ====================================================
// GraphQL fragment: FullLink
// ====================================================

export interface FullLink {
  __typename: "Link";
  referenceType: ReferenceType | null;
  referenceId: string | null;
  behavior: string | null;
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
}
