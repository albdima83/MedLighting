import {RtiLabUiKit} from './rti.models';

export enum LocalCarouselTemplate {
  BillboardBigCollection,
  BillboardCollection,
  BillboardCollectionInline,
  VideoBrandedCollection,
  OptionCollection,
  OnAirCollection,
  ScheduleCollection,
  CtvLanding,
  NavCollection,
  PosterCollection,
  KeyFrameCollection,
  GridKeyFrameCollection,
  GridPosterCollection
}

export interface ApplicationConfig {
  headerAppVersion: string;
  headerPlatform: string;
  headerProperty: string;
  siteSectionId: string;
  environment: string;
}

export interface RemoteConfig {
  menuNav?: MenuNav;
  optionsMap?: Record<string, Array<OptionMap>>;
  uiKit?: RtiLabUiKit;
  homepage?: string;
  homepageKids?: string;
  homepagePay?: string;
  optionId?: string;
}

export interface MenuNav {
  navUser?: string;
  navMain?: string;
  assets?: Record<string, string>;
}

export interface OptionMap {
  nav?: MenuNav;
  homepage: string;
}

export interface Section {
  id: string;
  index: number;
  title: string;
  data: [];
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface MImage {
  id: string;
  agency?: string | null;
  engine?: string | null;
  type?: string | null;
  r?: string | null;
}

export interface PageInfo {
  context?: string;
  endCursor?: string;
  hasNextPage?: boolean;
}

export interface CarouselItem {
  id: string;
  isPlaceholder: boolean;
  type?: string;
  eyelet?: string;
  title?: string;
  subtitle?: string;
  shortDescription?: string;
  description?: string;
  logos?: Array<MImage>;
  images?: Array<MImage>;
  ctas?: Array<ItemLink>;
  link?: ItemLink;
  trailerLink?: ItemLink;
  additionals?: Record<string, string>;
  subItems?: Array<CarouselItem>;
  forLoading?: boolean;
}

export interface CarouselExtraData {
  id: string;
  resolverType: string;
  resolverParams?: Record<string, string>;
  context: string;
  seasons?: [CarouselItem];
}

export interface SectionCarousel {
  id: string;
  title: string;
  showTitle: boolean;
  data: Array<Carousel>;
}

export interface Carousel {
  id: string;
  nameCollection?: string;
  resolveId?: string;
  type?: string;
  placeHolderType?: string | null | undefined;
  template?: CarouselTemplate;
  title?: string;
  data: Array<CarouselItem>;
  subtitle?: string;
  imageBackground?: string | null;
  items?: Array<CarouselItem>;
  placeHolder?: boolean;
  images?: Array<MImage>;
  extras?: CarouselExtraData | null;
  pageInfo?: PageInfo | null;
}

export interface ItemLink {
  isPlaceholder: boolean;
  value?: string;
  type?: string;
  target?: string;
  label?: string;
  referenceId?: string;
  referenceType?: string;
  resolverParams?: Record<string, string>;
  behavior?: string;
  siteSectionId?: string;
  fwCallSignSuffix?: string;
  callSign?: string;
}

export type Sections = Array<Section>;

export interface MenuItem {
  id: string;
  title: string;
  icon?: string | null | undefined;
  referenceId: string;
  referenceType: string;
}

export interface CarouselTemplate {
  collection: Array<string>;
  template: Array<string> | null | undefined;
  layout: Array<string> | null | undefined;
  localTemplate: LocalCarouselTemplate;
  templateImage: string;
  fallbackTemplateImage: string | null | undefined;
  itemsTemplateImage: string | null | undefined;
  itemsFallbackTemplateImage: string | null | undefined;
  itemsLen: number;
  itemsHorizontalSpace: number;
  itemsShowTitle: boolean;
  isGrid: boolean;
  carouselLayout?: CarouselLayout;
}

export interface CarouselItemLayout {
  x: number;
  y: number;
  width: number;
  height: number;
  showTitle?: boolean;
}

export interface CarouselLayout {
  width?: number;
  height?: number;
  itemLayout: CarouselItemLayout;
}

export type LayoutTemplate<T> = {
  [key in LocalCarouselTemplate]:T
};
