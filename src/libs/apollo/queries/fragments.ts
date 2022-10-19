import { gql } from '@apollo/client';

export const PageInfoFragment = gql`
   fragment PageInfoFragment on PageInfo{
	context
	endCursor
	hasNextPage
  }
`;

export const BasicLink = gql`
	fragment BasicLink on Link {
		referenceType
		referenceId
		behavior
	}
`;

export const FullLink = gql`
	${BasicLink}
	fragment FullLink on Link {
		...BasicLink
		value
		type
		target
	}
`;

export const ImageInfo = gql`
	fragment ImageInfo on ImageUnion {
		__typename
		... on ImagePlaceholder {
			engine
			id
			r
			type
		}
		... on Image {
			w
			h
			format
		}
	}
`;

export const Ctas = gql`
	fragment Ctas on VisualLink {
		__typename
		label
		color
		referenceType
		referenceId
		iconReference
		behavior
	}
`;

/* LABELS */

export const EditorialLabels = gql`
	fragment EditorialLabels on LabelUnion {
		__typename
		... on LabelReference {
			id
			startDate
			endDate
		}
	}
`;

export const ChannelLabel = gql`
	fragment ChannelLabel on LabelReference {
		__typename
		id
		startDate
		endDate
	}
`;

export const AdditionalLabel = gql`
	fragment AdditionalLabel on Label {
		__typename
		id
		type
		title
		imageLarge
		imageSmall
		subtitle
		bgColor
		bgOpacity
		textColor
	}
`;

export const AllLabels = gql`
	${EditorialLabels}
	${AdditionalLabel}
	${ChannelLabel}
	fragment AllLabels on Item {
		... on VideoItem {
			editorialLabels {
				...EditorialLabels
			}
			additionalLabel {
				...AdditionalLabel
			}
			channelLabels {
				...ChannelLabel
			}
		}
		... on SeasonItem {
			editorialLabels {
				...EditorialLabels
			}
			additionalLabel {
				...AdditionalLabel
			}
			channelLabels {
				...ChannelLabel
			}
		}
		... on SeriesItem {
			editorialLabels {
				...EditorialLabels
			}
			additionalLabel {
				...AdditionalLabel
			}
			channelLabels {
				...ChannelLabel
			}
		}
		... on GenericItem {
			editorialLabels {
				...EditorialLabels
			}
			additionalLabel {
				...AdditionalLabel
			}
			channelLabels {
				...ChannelLabel
			}
		}

		... on StationItem {
			editorialLabels {
				...EditorialLabels
			}
			additionalLabel {
				...AdditionalLabel
			}
			channelLabels {
				...ChannelLabel
			}
		}

		... on ArticleItem {
			editorialLabels {
				...EditorialLabels
			}
			additionalLabel {
				...AdditionalLabel
			}
			channelLabels {
				...ChannelLabel
			}
		}
	}
`;

/* Collection | ItemsConnection */
export const ItemsConnectionBase = gql`
	fragment ItemsConnectionBase on ItemsConnection {
		pageInfo {
			hasNextPage
			endCursor
			context
		}
		items {
			__typename
		}
	}
`;

export const CollectionBase = gql`
	fragment CollectionBase on Collection {
		__typename
		id
		title
		attributes {
			variant
			template
			layout
			flags
			refreshInterval
		}
		analyticsContext {
			recoTrackId
		}
	}
`;

/* PlaceholderCollection */
export const PlaceholderCollection = gql`
	${CollectionBase}
	fragment PlaceholderCollection on PlaceholderCollection {
		...CollectionBase
		resolverType
		resolverParams {
			key
			value
		}
	}
`;

/* PlaceholderCollection */
export const UserlistCollection = gql`
	${CollectionBase}
	fragment UserlistCollection on UserlistCollection {
		...CollectionBase
		resolverType
		notLoggedTitle
		notLoggedDescription
		emptyDescription
		emptyTitle
		resolved
		resolverParams {
			key
			value
		}
	}
`;

/* Section */

export const SectionBase = gql`
	fragment SectionBase on Section {
		__typename
		id
	}
`;

export const SectionsInterfacesConnectionBase = gql`
	fragment SectionsInterfacesConnectionBase on SectionInterfacesConnection {
		__typename
		pageInfo {
			hasNextPage
			endCursor
			context
		}
	}
`;

export const PlaceholderSection = gql`
	fragment PlaceholderSection on PlaceholderSection {
		__typename
		id
		title
		resolverType
		resolverParams {
			key
			value
		}
	}
`;

/* Landing */

export const LandingItem = gql`
	${Ctas}
	fragment LandingItem on LandingItem {
		__typename
		id
		cardTitle
		cardText
		promoCodeLabel
		cardCtas {
			...Ctas
		}
	}
`;

/* Analytics */
export const AnalyticsContext = gql`
	fragment AnalyticsContext on PageInterface {
		analyticsContext {
			pageId
			contentId
			contentType
			publishDate
			pageSection
			pageSubsection
			pageSubsubsection
			pageTitle
			pageType
			pageUrl
			advSiteSection
		}
	}
`;

/* Page */

export const PageChannels = gql`
	${BasicLink}
	${SectionBase}
	${LandingItem}
	${PlaceholderSection}
	fragment PageChannels on PageInterface {
		requiredChannelRight
		option

		landingSectionInterfacesConnection {
			sections {
				... on Section {
					...SectionBase
					collections {
						... on GenericCollection {
							__typename
							id
							itemsConnection {
								__typename
								items {
									__typename
									...LandingItem
								}
							}
						}
					}
				}
				... on PlaceholderSection {
					...PlaceholderSection
				}
			}
		}

		subscribedCtaLink {
			...BasicLink
		}
	}
`;

export const BasicPageInfo = gql`
	${PageChannels}
	${AnalyticsContext}
	fragment BasicPageInfo on Page {
		__typename
		id
		type
		title
		...PageChannels
		...AnalyticsContext
	}
`;

/* DetailPage */

export const BasicDetailPageInfo = gql`
	${PageChannels}
	${AnalyticsContext}
	fragment BasicDetailPageInfo on DetailPage {
		__typename
		id
		type
		title
		...PageChannels
		...AnalyticsContext
	}
`;

/* Item */

export const ItemAnalyticsContext = gql`
	fragment ItemAnalyticsContext on Item {
		analyticsContext {
			trackId
		}
	}
`;

export const ItemCommonFields = gql`
	${ItemAnalyticsContext}
	fragment ItemCommonFields on Item {
		__typename
		cardTitle
		cardText
		cardEyelet
		cardImages {
			...ImageInfo
		}
		...ItemAnalyticsContext
	}
`;

/** VideoItem */

export const VideoItemsRights = gql`
	fragment VideoItemsRights on VideoItem {
		contentRight
		channelRights
		channelRight
		editorialType
		rating
	}
`;

export const VideoItemIdentity = gql`
	fragment VideoItemIdentity on VideoItem {
		__typename
		guid
	}
`;

export const CardPlayer = gql`
	fragment CardPlayer on CardPlayer {
		guid
		callSign
		previewTimeout
		advContext {
			advSiteSection
			fwCallSignSuffix
		}
		analyticsContext {
			contentId
			trackId
		}
	}
`;

export const NavItemFragment = gql`
	fragment NavItemFragment on NavItem{
        id
        title
        icon
        disableForNotLogged
        hideForChannelRights
        hideForLogged
        hideForNotLogged
        showForKids
        link {
          referenceId
          referenceType
        }
	}
`;

export const PlaceholderNavItem = gql`
	fragment PlaceholderNavItem  on PlaceholderNavItem{
        id
        title
        iconReference
        disableForNotLogged
        hideForChannelRights
        hideForLogged
        hideForNotLogged
        showForKids
        resolverType
        resolverParams {
        key
        value
        }
    }
`;

export const AnalyticsContextFragment = gql`
	fragment AnalyticsContextFragment on AnalyticsContext{
	advSiteSection
	contentId
	brand
	}
`;

export const AdvContextFragment = gql`
	fragment AdvContextFragment on AdvContext{
	adUnit
	advSiteSection
	fwCallSignSuffix
	}
`;

export const LinkFragment = gql`
	fragment LinkFragment on Link {
    value
    type
    target
    referenceId
    referenceType
    behavior
}
`;
  
export const CollectionAttributesFragment = gql`
	fragment CollectionAttributesFragment on CollectionAttributes {
    layout
    flags
    interval
    timeSlideshow
    variant
    template
    refreshInterval
}
`;

export const VisualLinkFragment = gql`
	fragment VisualLinkFragment on VisualLink{
    value
    type
    target
    label
    referenceId
    referenceType
    behavior
}
`;

export const ImageFragment = gql`
	fragment ImageFragment on ImagePlaceholder{
    agency
    id
    engine
    type
    r
    imagePreview
}
`;

export const CardAttributesFragment = gql`
	fragment CardAttributesFragment on CardAttributes{
  textColor
}
`;

export const AdditionalLabelFragment = gql`
	fragment AdditionalLabelFragment on Label{
  bgColor,
  type,
  title
}
`;

/*
export const ItemFragmentOLD = gql`
${ImageFragment}
${CardAttributesFragment}
${VisualLinkFragment}
${LinkFragment}
${AdditionalLabelFragment}
fragment ItemFragment on Item{
  __typename
  cardImages{
    ...ImageFragment
  }
  cardAttributes {
    ...CardAttributesFragment
  }
  cardCtas {
    ...VisualLinkFragment
  }
  cardEyelet
  cardLink{
    ...LinkFragment
  }
  cardTitle
  cardText
  id
  ... on GenericItem{
    additionalLabel {
      ...AdditionalLabelFragment
    }
  }
  ... on LandingItem{
    id
    cardText
  }
  ... on PlaceholderItem{
    id
    resolverType
  }
  ... on VideoItem{
    editorialType
    seasonTitle
    additionalLabel {
      ...AdditionalLabelFragment
    }
  }
  ... on SeasonItem{
    additionalLabel {
      ...AdditionalLabelFragment
    }
  }
  ... on SeriesItem{
    additionalLabel {
      ...AdditionalLabelFragment
    }
  }
  ... on StationItem{
    additionalLabel {
      ...AdditionalLabelFragment
    }
    cardAttributes{
      bgGradient {
        angle
        endColor
        startColor
      }
    }
    cardText
    listings {
      startTime,
      endTime,
      guid,
      restartAllowed,
      liveAllowed,
      title,
      description
    }
  }
}
`;
*/

export const ItemFragment = gql`
${ImageFragment}
${CardAttributesFragment}
${VisualLinkFragment}
${LinkFragment}
${AdditionalLabelFragment}
fragment ItemFragment on Item{
  __typename
  cardImages{
    ...ImageFragment
  }
  cardAttributes {
    ...CardAttributesFragment
  }
  cardCtas {
    ...VisualLinkFragment
  }
  cardEyelet
  cardLink{
    ...LinkFragment
  }
  cardTitle
  cardText
  id
  ... on GenericItem{
    additionalLabel {
      ...AdditionalLabelFragment
    }
  }
}
`;

export const ItemFragmentWithText = gql`
    ${ItemFragment}
	fragment ItemFragmentWithText on Item{
    ...ItemFragment
    cardText
}
`;

export const CollectionFragment = gql`
${CollectionAttributesFragment}
${VisualLinkFragment}
${ImageFragment}
${PageInfoFragment}
${PageInfoFragment}
${ItemFragment}
fragment CollectionFragment on Collection{
  __typename
  attributes {
    ...CollectionAttributesFragment
  }
  ctas{
    ...VisualLinkFragment
  }
  id
  images{
    ...ImageFragment
  }
  itemsConnection(first:$first){
    pageInfo{
        ... PageInfoFragment
    }
    items{
      ...ItemFragment
    }
  }
  title
}
`;

export const SeasonItemFragment = gql`
${LinkFragment}
fragment SeasonItemFragment on SeasonItem{
  seasonTitle
  seasonNumber
  seriesGuid
  cardLink {
     ...LinkFragment
  }
}
`;

export const DetailItemFragment = gql`
${ImageFragment}
${CardAttributesFragment}
${VisualLinkFragment}
${LinkFragment}
${VisualLinkFragment}
${ItemFragment}
${SeasonItemFragment}
fragment DetailItemFragment on Item{
  __typename
  cardTitle
  cardText
  cardImages{
    ...ImageFragment
  }
  cardAttributes {
    ...CardAttributesFragment
  }
  cardCtas {
    ...VisualLinkFragment
  }
  cardLink {
    ...LinkFragment
  }
  ... on SeriesItem{
    genres,
    primaryGenre,
    rating,
    editorialMetadata,
    year,
    serviceId,
    selectedSeason {
      seasonTitle
      title
      description
      genres
      rating
      primaryGenre
      expirationDate
      actors
      directors
      audioLanguages
      conductors
      subLanguages
      editorialMetadata
      cardEditorialMetadata
      selectedEpisodeLink {
        ... VisualLinkFragment
      }
      ... ItemFragment
    }
    seasons {
      ... SeasonItemFragment
    }
  }
  ... on VideoItem{
    duration,
    expirationDate,
    year,
    country,
    contentRight,
    primaryGenre,
    trailer {
      cardLink {
        ... LinkFragment
      }
    },
    rating,
    directors,
    actors,
    audioLanguages,
    subLanguages
  }
  
}
`;

export const SectionFragment = gql`
${ItemFragmentWithText}
${ImageFragment}
${LinkFragment}
${CollectionFragment}
fragment SectionFragment on Section{
    collections{
      ...CollectionFragment
      ... on ScheduleCollection{
        itemsConnection(first:$first){
          items{
            ... ItemFragmentWithText
          }
        }
      }
      ... on OnAirCollection{
        itemsConnection(first:$first){
          items{
            ... ItemFragmentWithText
          }
        }
      }
      ... on PlaceholderCollection{
        id
        resolverParams {
          key,
          value,
          __typename
        }
        resolverType
      }
      ... on UserlistCollection{
        id
        resolved
        resolverParams {
          key,
          value,
          __typename
        }
        resolverType
      }
      ... on VideoCollection {
        description
        images{
          ...ImageFragment
        }
      }
    }
    __typename
    id
    link{
      ... LinkFragment
    }
    title
}
`;

export const SectionInterfaceFragment = gql`
	${SectionFragment}
	fragment SectionInterfaceFragment on SectionInterface{
        __typename
        id
		...SectionFragment
        ... on PlaceholderSection {
            id
            resolverType
            resolverParams {
              key
              value
              
              }
          }
	}
`;

export const LandingSectionsConnectionFragment = gql`
${SectionInterfaceFragment}
fragment LandingSectionsConnectionFragment on SectionInterfacesConnection{
      sections {
        ... SectionInterfaceFragment
      }
}
`;

export const SectionInterfacesConnectionFragment = gql`
${SectionInterfaceFragment}
${PageInfoFragment}
fragment SectionInterfacesConnectionFragment on SectionInterfacesConnection{
      sections {
        ... SectionInterfaceFragment
      }
      pageInfo{
        ... PageInfoFragment
      }
}
`;

export const OptionsFragment = gql`
${LinkFragment}
fragment OptionsFragment on Option{
  id
  name
  landingImageCtv
  extendedLogo
  landingCtaLink{
    ... LinkFragment
  }
}
`;

export const DetailStaticFragment = gql`
${LinkFragment}
fragment DetailStaticFragment on Item{
    title
    __typename
    ... on QrCodeItem{
      vanityUrl
      actionCreateUrl
    }
    ... on StaticItem{
        id
        cardTitle
        cardLink {
          ...LinkFragment
        }
        content {
          __typename
          ... on HtmlParagraph{
            title
            html
          }
        }
    }
}
`;

export const DataSourceFragment = gql`
fragment DataSourceFragment on Item{
      id
      serviceId
      ... on VideoItem{
        guid,
        nextVideo{
          ... on PlaceholderItem{
            id
            resolverType
            resolverParams {
              key,
              value
            }
          }
          ... on VideoItem{
            callSign
            guid
          }
        }
      }
      ... on StationItem{
        callSign
        listings{
            guid
            liveAllowed
            restartAllowed
        }
      }
}	
`;