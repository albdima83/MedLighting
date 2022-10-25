/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LinkType, LinkTarget, ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: SeasonItemFragment
// ====================================================

export interface SeasonItemFragment_cardLink {
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

export interface SeasonItemFragment {
  __typename: "SeasonItem";
  seasonTitle: string | null;
  seasonNumber: number | null;
  /**
   * ID of the related Series
   */
  seriesGuid: string | null;
  cardLink: SeasonItemFragment_cardLink | null;
}
