/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: OptionsFragment
// ====================================================

export interface OptionsFragment_landingCtaLink {
  __typename: "Link";
  /**
   * url|reference
   */
  value: string;
  type: LinkType;
  target: LinkTarget | null;
  referenceId: string | null;
  referenceType: ReferenceType | null;
  behavior: string | null;
}

export interface OptionsFragment {
  __typename: "Option";
  id: string;
  name: string;
  landingImageCtv: any | null;
  extendedLogo: any | null;
  landingCtaLink: OptionsFragment_landingCtaLink | null;
}
