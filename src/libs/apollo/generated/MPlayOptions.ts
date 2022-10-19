/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL query operation: MPlayOptions
// ====================================================

export interface MPlayOptions_getOptions_landingCtaLink {
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

export interface MPlayOptions_getOptions {
  __typename: "Option";
  id: string;
  name: string;
  landingImageCtv: any | null;
  extendedLogo: any | null;
  landingCtaLink: MPlayOptions_getOptions_landingCtaLink | null;
}

export interface MPlayOptions {
  /**
   * Get a dictionary of options, based on the dictionary ID.
   */
  getOptions: MPlayOptions_getOptions[] | null;
}

export interface MPlayOptionsVariables {
  id: string;
}
