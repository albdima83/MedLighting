/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AdditionalLabel
// ====================================================

export interface AdditionalLabel {
  __typename: "Label";
  id: string | null;
  /**
   * Tipo della label, per applicare eventuali logiche custom (es. blink dell'oggetto Ora In Onda)
   */
  type: string | null;
  /**
   * Titolo della label. Campo alternativo a imageLarge/imageSmall
   */
  title: string | null;
  /**
   * Immagine della label in versione large. Campo alternativo a title
   */
  imageLarge: URL | null;
  /**
   * Immagine della label in versione small. Campo alternativo a title
   */
  imageSmall: URL | null;
  subtitle: string | null;
  /**
   * Colore dello sfondo della label
   */
  bgColor: HexColorCode | null;
  /**
   * Opacità (0-1)
   */
  bgOpacity: number | null;
  /**
   * Colore del testo
   */
  textColor: HexColorCode | null;
}
