import { ContentPreviewData } from "../models";
import { ItemFragment, ItemFragment_SeasonItem, ItemFragment_StationItem, ItemFragment_VideoItem } from "../generated/ItemFragment";
import result from "../introspections/introspection-result"



export const isTypenameItem = (item: ItemFragment,typename:string): boolean => {
    const arrayItems:Array<string> = result.possibleTypes.Item   
    if( arrayItems.includes(typename)){
        return (item.__typename === typename)
    }
    return false
}

export const isArticleItem = (item:ItemFragment) => isTypenameItem(item, "ArticleItem")
export const isBreakingItem = (item:ItemFragment) => isTypenameItem(item, "BreakingItem")
export const isGalleryItem = (item:ItemFragment) => isTypenameItem(item, "GalleryItem")
export const isLandingItem = (item:ItemFragment) => isTypenameItem(item, "LandingItem")
export const isOptionItem = (item:ItemFragment) => isTypenameItem(item, "OptionItem")
export const isPickerItem = (item:ItemFragment) => isTypenameItem(item, "PickerItem")
export const isPlaceholderItem = (item:ItemFragment) => isTypenameItem(item, "PlaceholderItem")
export const isPodcastItem = (item:ItemFragment) => isTypenameItem(item, "PodcastItem")
export const isQrCodeItem = (item:ItemFragment) => isTypenameItem(item, "QrCodeItem")
export const isRecipeItem = (item:ItemFragment) => isTypenameItem(item, "RecipeItem")
export const isSeasonItem = (item:ItemFragment) => isTypenameItem(item, "SeasonItem")
export const isSeriesItem = (item:ItemFragment) => isTypenameItem(item, "SeriesItem")
export const isStationItem = (item:ItemFragment) => isTypenameItem(item, "StationItem")
export const isVideoItem = (item:ItemFragment) => isTypenameItem(item, "VideoItem")


const _previewDataVideoOrSeasonMapper = (item: ItemFragment_VideoItem | ItemFragment_SeasonItem) : ContentPreviewData | null => {

	const cardLogo = item.cardImages
	const cardBackground = item.cardImages
	
    /*
    const cardLogo = findPlaceholderImage(item.cardImages, 'logo_horizontal');
	const cardBackgroundImage = findPlaceholderImage(item.cardImages, 'image_header_poster');

	const previewData: ContentPreviewData = {
		logoUrl: cardLogo ? ImageResolver(cardLogo, PIXELS.LOGO_HORIZONTAL) : '',
		logoFallbackTitle: item.cardTitle,
		backgroundImageUrl: cardBackgroundImage
			? ImageResolver(cardBackgroundImage, PIXELS.MOVIE.PREVIEW)
			: '',
	};

	if (!logoAndBackgroundOnly) {
		previewData.eyelet =
			item.cardEditorialMetadataRating || item.cardEditorialMetadata || 'editorialType' in item
				? {
						rating: item.cardEditorialMetadataRating as Rating,
						text: item.cardEditorialMetadata,
						showFullEpisodeLabel: 'editorialType' in item && item.editorialType === 'Full Episode',
				  }
				: null;
		previewData.body = item.cardText
			? {
					text: item.cardText,
			  }
			: null;
		previewData.expirationDate = item.expirationDate;
	}
    */
    return null
}

const _previewDataOnAirMapper = (item: ItemFragment_StationItem): ContentPreviewData | null => {
	
	const prog = item?.listings?.[0];
	//const logoImgs = []; //item.cardImages
	//const backgroundImgs = []; //prog.images
	const templateLogo = 'editorial_image_channel_logo';
	const fallabckTemplateLogo = null;
	const templateBackground = 'image_header_poster';
	const subtitle = prog?.title ?? null;
    const showOnAirLabel  = prog?.liveAllowed ? 'ora in onda' : null;
    const logoFallbackTitle =  prog?.title ?? null;
	
    return {
		//logoImgs,
		templateLogo,
		fallabckTemplateLogo,
		//backgroundImgs,
		templateBackground,
	    showOnAirLabel,
        subtitle,
        logoFallbackTitle
    }
    /*
	const cardLogo = findPlaceholderImage(data.cardImages, 'editorial_image_channel_logo') || '';
	const cardBackgroundImage = findPlaceholderImage(prog?.images, 'image_header_poster') || '';

	return {
		showOnAirLabel: prog?.liveAllowed ? 'ora in onda' : null,
		logoUrl: cardLogo ? ImageResolver(cardLogo, PIXELS.LOGO) : '',
		logoFallbackTitle: prog?.title,
		backgroundImageUrl: cardBackgroundImage
			? ImageResolver(cardBackgroundImage, PIXELS.ONAIR.CHANNEL)
			: '',
		subtitle: prog?.title,
		body:
			prog?.rating || prog?.description
				? {
						rating: prog?.rating as Rating,
						text: prog?.description,
				  }
				: null,
	};*/
};


type TypenameKey = keyof ItemFragment["__typename"];

type ContentPreviewDicHelper = {
    [key: string]: ((item: any) => ContentPreviewData | null) | null
}


export const contentPreviewFromType:ContentPreviewDicHelper = {
    "ArticleItem": null,
    "BreakingItem": null,
    "GalleryItem" : null,
    "OptionItem": null,
    "PickerItem": null,
    "PodcastItem": null,
    "QrCodeItem": null,
    "RecipeItem": null,
    "GenericItem": null,
    "VideoItem" : _previewDataVideoOrSeasonMapper,
    "SeasonItem": _previewDataVideoOrSeasonMapper,
    "SeriesItem": null,
    "StationItem" : _previewDataOnAirMapper,
    "StaticItem": null,
    "LandingItem": null,
    "PlaceholderItem": null
}


export const getContentPreviewFromItem = (item: ItemFragment): ContentPreviewData | null => {
    const type = item.__typename
    const contentPreview = contentPreviewFromType[type]
	if(!!contentPreview){
		return contentPreview(item)
	}
    return null
}

