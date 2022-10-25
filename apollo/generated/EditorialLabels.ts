/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: EditorialLabels
// ====================================================

export interface EditorialLabels {
  __typename: "LabelReference";
  /**
   * Rappresenta l'ID della label da ricercare nel dizionario di label
   */
  id: string;
  /**
   * Parametro opzionale rappresentante una data da inserire negli eventuali placeholder della label
   */
  startDate: DateTime | null;
  /**
   * Parametro opzionale rappresentante una data da inserire negli eventuali placeholder della label
   */
  endDate: DateTime | null;
}
