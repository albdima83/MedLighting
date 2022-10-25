/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ImageInfo
// ====================================================

export interface ImageInfo_ImagePlaceholder {
  __typename: "ImagePlaceholder";
  engine: string;
  id: string;
  r: string;
  type: string;
}

export interface ImageInfo_Image {
  __typename: "Image";
  w: number;
  h: number;
  format: string;
}

export type ImageInfo = ImageInfo_ImagePlaceholder | ImageInfo_Image;
