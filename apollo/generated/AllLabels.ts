/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AllLabels
// ====================================================

export interface AllLabels_PlaceholderItem {
  __typename: "PlaceholderItem" | "BreakingItem" | "GalleryItem" | "LandingItem" | "OptionItem" | "PickerItem" | "PodcastItem" | "QrCodeItem" | "RecipeItem" | "StaticItem";
}

export interface AllLabels_VideoItem_editorialLabels {
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

export interface AllLabels_VideoItem_additionalLabel {
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

export interface AllLabels_VideoItem_channelLabels {
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

export interface AllLabels_VideoItem {
  __typename: "VideoItem";
  editorialLabels: AllLabels_VideoItem_editorialLabels[] | null;
  additionalLabel: AllLabels_VideoItem_additionalLabel | null;
  channelLabels: AllLabels_VideoItem_channelLabels[] | null;
}

export interface AllLabels_SeasonItem_editorialLabels {
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

export interface AllLabels_SeasonItem_additionalLabel {
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

export interface AllLabels_SeasonItem_channelLabels {
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

export interface AllLabels_SeasonItem {
  __typename: "SeasonItem";
  editorialLabels: AllLabels_SeasonItem_editorialLabels[] | null;
  additionalLabel: AllLabels_SeasonItem_additionalLabel | null;
  channelLabels: AllLabels_SeasonItem_channelLabels[] | null;
}

export interface AllLabels_SeriesItem_editorialLabels {
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

export interface AllLabels_SeriesItem_additionalLabel {
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

export interface AllLabels_SeriesItem_channelLabels {
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

export interface AllLabels_SeriesItem {
  __typename: "SeriesItem";
  editorialLabels: AllLabels_SeriesItem_editorialLabels[] | null;
  additionalLabel: AllLabels_SeriesItem_additionalLabel | null;
  channelLabels: AllLabels_SeriesItem_channelLabels[] | null;
}

export interface AllLabels_GenericItem_editorialLabels {
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

export interface AllLabels_GenericItem_additionalLabel {
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

export interface AllLabels_GenericItem_channelLabels {
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

export interface AllLabels_GenericItem {
  __typename: "GenericItem";
  editorialLabels: AllLabels_GenericItem_editorialLabels[] | null;
  additionalLabel: AllLabels_GenericItem_additionalLabel | null;
  channelLabels: AllLabels_GenericItem_channelLabels[] | null;
}

export interface AllLabels_StationItem_editorialLabels {
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

export interface AllLabels_StationItem_additionalLabel {
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

export interface AllLabels_StationItem_channelLabels {
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

export interface AllLabels_StationItem {
  __typename: "StationItem";
  editorialLabels: AllLabels_StationItem_editorialLabels[] | null;
  additionalLabel: AllLabels_StationItem_additionalLabel | null;
  channelLabels: AllLabels_StationItem_channelLabels[] | null;
}

export interface AllLabels_ArticleItem_editorialLabels {
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

export interface AllLabels_ArticleItem_additionalLabel {
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

export interface AllLabels_ArticleItem_channelLabels {
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

export interface AllLabels_ArticleItem {
  __typename: "ArticleItem";
  editorialLabels: AllLabels_ArticleItem_editorialLabels[] | null;
  additionalLabel: AllLabels_ArticleItem_additionalLabel | null;
  channelLabels: AllLabels_ArticleItem_channelLabels[] | null;
}

export type AllLabels = AllLabels_PlaceholderItem | AllLabels_VideoItem | AllLabels_SeasonItem | AllLabels_SeriesItem | AllLabels_GenericItem | AllLabels_StationItem | AllLabels_ArticleItem;
