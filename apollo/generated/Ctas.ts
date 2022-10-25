/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: Ctas
// ====================================================

export interface Ctas {
  __typename: "VisualLink";
  /**
   * The title of the link
   */
  label: string | null;
  color: HexColorCode | null;
  referenceType: ReferenceType | null;
  referenceId: string | null;
  iconReference: string | null;
  behavior: string | null;
}
