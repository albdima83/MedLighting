/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: VideoItemsRights
// ====================================================

export interface VideoItemsRights {
  __typename: "VideoItem";
  /**
   * First non_avod content right (SVOD/TVOD)
   */
  contentRight: string | null;
  /**
   * List of all channel rights without technical data (_any, _all, rightonly)
   */
  channelRights: string[] | null;
  /**
   * First AVOD channelright or First NON_avod channel right (..._SVOD/..._TVOD)
   */
  channelRight: string | null;
  editorialType: string | null;
  rating: string | null;
}
