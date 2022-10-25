/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: VisualLinkFragment
// ====================================================

export interface VisualLinkFragment {
  __typename: "VisualLink";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  /**
   * The title of the link
   */
  label: string | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}
