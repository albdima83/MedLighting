/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ReferenceType } from "./globalTypes";

// ====================================================
// GraphQL fragment: LandingItem
// ====================================================

export interface LandingItem_cardCtas {
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

export interface LandingItem {
  __typename: "LandingItem";
  id: string | null;
  cardTitle: string | null;
  cardText: string | null;
  promoCodeLabel: string | null;
  cardCtas: LandingItem_cardCtas[] | null;
}
