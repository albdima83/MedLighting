import { gql } from '@apollo/client';
import {PlaceholderNavItem,NavItemFragment, AdvContextFragment, LandingSectionsConnectionFragment, SectionInterfacesConnectionFragment, SectionFragment} from './fragments';

export const GET_MENUS = gql`
 ${PlaceholderNavItem}
 ${NavItemFragment}
 query MPlayMenu($id: ID!) {
      getNav(id: $id) {
        __typename
        items {
          __typename
          id
          showForKids
          showForChannelRights
          hideForChannelRights
          items {
            __typename
            ...NavItemFragment
            ...PlaceholderNavItem
          }
        }
      }
  }
`

export const GET_PAGE = gql`
 ${AdvContextFragment}
 ${LandingSectionsConnectionFragment}
 ${SectionInterfacesConnectionFragment}
 query MPlayPage($id: ID!, $first: Int) {
      getPage(id: $id) {
        __typename
        id
        type
        lastModified
        option
        requiredChannelRight
        advContext {
          __typename
          ...AdvContextFragment
        }
        landingSectionInterfacesConnection {
          __typename
          ...LandingSectionsConnectionFragment
        }
        sectionInterfacesConnection {
          __typename
          ...SectionInterfacesConnectionFragment
        }
      }
 }
`
