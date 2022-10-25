/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: BasicLink
// ====================================================

export interface BasicLink {
  __typename: "Link";
  referenceType: ReferenceType | null;
  referenceId: string | null;
  behavior: string | null;
}
