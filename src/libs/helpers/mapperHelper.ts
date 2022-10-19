import {
  MPlayMenu,
  MPlayMenu_getNav_items_items_NavItem_link,
} from '../apollo/generated/MPlayMenu';
import {
  Carousel,
  CarouselItem,
  CarouselTemplate,
  ItemLink,
  MenuItem,
  MImage,
} from '../models/app.models';
import uuid from 'uuid-random';
import {AdvContextFragment} from '../apollo/generated/AdvContextFragment';
import {ImageFragment} from '../apollo/generated/ImageFragment';
import {CarouselTemplates} from '../configurations/layout';
import {
  ItemFragment,
  ItemFragment_GenericItem,
  ItemFragment_PlaceholderItem,
  ItemFragment_VideoItem,
} from '../apollo/generated/ItemFragment';
import {
  MPlayPage_getPage_sectionInterfacesConnection_sections,
  MPlayPage_getPage_sectionInterfacesConnection_sections_Section,
  MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections,
  MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items,
} from '../apollo/generated/MPlayPage';

class MapperHelper {
  static isEmpty = (arr: any) => {
    if (Array.isArray(arr) && arr.length > 0) {
      return false;
    }
    return true;
  };;

  static arrayContains = (arr: any, value: any) => {
    if (Array.isArray(arr) && arr.length > 0 && !!value) {
      return arr.indexOf(value) >= 0;
    }
    return false;
  };;

  static getLocalTemplate = (
    collection: string,
    template: string,
    layout: string,
    variant: string,
  ): CarouselTemplate | null => {

    console.log(`getLocalTemplate [${collection}] [${template}] [${layout}] [${variant}]`);
    const localCarouselTemplate = CarouselTemplates.find(carouselTemplate => {
        return (
          !MapperHelper.isEmpty(carouselTemplate.collection) &&
          MapperHelper.arrayContains(carouselTemplate.collection, collection) &&
          (MapperHelper.isEmpty(carouselTemplate.template) ||
            MapperHelper.arrayContains(carouselTemplate.template, template)) &&
          (MapperHelper.isEmpty(carouselTemplate.layout) ||
            MapperHelper.arrayContains(carouselTemplate.layout, layout) ||
            MapperHelper.arrayContains(carouselTemplate.layout, variant))
        );
      });
      return localCarouselTemplate ?? null;
  }

  static getCarouselItemsFromFragment = (
    itemFragment: ItemFragment,
    template?: CarouselTemplate,
    advContext?: AdvContextFragment | null,
    linkPlaceholder?: ItemLink | null,
  ): CarouselItem | null | undefined => {
    if  (!template || !template.template) {return null;}
    const _template = template.template;
    console.log(`@@@ getCarouselItemsFromFragment: [${_template}]`);
    let titleItem = itemFragment.cardTitle ?? '';;
    let eyelet = itemFragment.cardEyelet ?? '';;
    let subtitleItem = '';;
    let shortDescriptionItem = itemFragment.cardText ?? '';;
    let descriptionItem = '';;
    let ctas: Array<ItemLink> = [];;
    let link: ItemLink | null = null;;
    const imagesItem: Array<MImage> = [];;
    let additionals: Record<string, string> = {};;
    let isPlaceholder = false;
    //!!(itemFragment as ItemFragment_PlaceholderItem);
    let type = '';
      //(itemFragment as ItemFragment_PlaceholderItem)?.resolverType ?? '';;
    let cardLink = itemFragment.cardLink;;
    let cardCtas = itemFragment.cardCtas;;
    let cImags = itemFragment.cardImages;;

    if (!!cardLink) {
      //link = ItemLink.initFromLink(linkFragment: cardLink.fragments.linkFragment,advContext: advContext)
    }
    if (!!cardCtas) {
      for (let cardCta of cardCtas) {
        /*
                if let cta = ItemLink.initFromVisualLink(visualLinkFragment: cardCta.fragments.visualLinkFragment,advContext: advContext){
                    ctas.append(cta)
                }
                */
      }
    }

    if (itemFragment.__typename === 'GenericItem') {
      const genericItem = itemFragment as ItemFragment_GenericItem;
      const additionalLabel = genericItem?.additionalLabel ?? null;
      if (!!additionalLabel) {
        additionals['type'] = additionalLabel.type ?? '';
        additionals['title'] = additionalLabel.title ?? '';
        additionals['bgColor'] = additionalLabel.bgColor ?? '';
      }
    }
    if (itemFragment.__typename === 'VideoItem') {
      const videoItem = itemFragment as ItemFragment_VideoItem;
      const editorialType = videoItem?.editorialType ?? '';;
      eyelet = ((editorialType.toLowerCase() === 'movie') ? 'FILM' : (videoItem?.seasonTitle)) ?? '';
    }

    if (!!cImags) {
      for (const img of cImags) {
        if (img as ImageFragment) {
          const imgAgency = (img as ImageFragment).agency;
          const imgId = (img as ImageFragment).id;
          const imgEngine = (img as ImageFragment).engine;
          const imgType = (img as ImageFragment).type;
          const imgR = (img as ImageFragment).r;
          imagesItem.push({
            id: imgId,
            agency: imgAgency,
            engine: imgEngine,
            type: imgType,
            r: imgR,
          });
        }
      }
    }

    return {
      id: uuid(),
      isPlaceholder,
      additionals,
      ctas,
      title: titleItem,
      description: descriptionItem,
      eyelet,
      shortDescription: shortDescriptionItem,
      subtitle: subtitleItem,
      type,
      images: imagesItem,
    };
  };;

  static getCarouselItems = (
    template?: CarouselTemplate,
    advContext?: AdvContextFragment | null,
    items?: MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_VideoCollection_itemsConnection_items[],
    linkPlaceholder?: ItemLink | null,
  ): Array<CarouselItem> => {

    if (!!!template || !!!items){
      return [];
    }
    console.log(`@@@ getCarouselItems :${template.localTemplate}`);
    console.log(items);
    const carouselItems: Array<CarouselItem> = [];
    for (const item of items) {
      const carouselItem = MapperHelper.getCarouselItemsFromFragment(
        item,
        template,
        advContext,
        linkPlaceholder,
      );
      if (!!carouselItem) {
        carouselItems.push(carouselItem);
      }
    }
    return carouselItems;
  };;

  static getCarouselsFromSection = (
    section: MPlayPage_getPage_sectionInterfacesConnection_sections,
    advContext?: AdvContextFragment | null,
    includePlaceHoder: boolean = true,
  ): Array<Carousel> => {
    console.log('@@@ getCarouselsFromSection');
    const carouselList: Array<Carousel> = [];
    const collections =
      (
        section as MPlayPage_getPage_sectionInterfacesConnection_sections_Section
      ).collections ?? [];
    for (const collection of collections) {
      const id = collection?.id ?? '';
      const title = collection?.title ?? '';
      const typename = collection?.__typename ?? '';
      let description = '';
      const images: Array<MImage> = [];
      if (
        collection as MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections
      ) {
        description = '';
        const imgs = collection?.images ?? [];
        const template = collection?.attributes?.template ?? '';
        const layout = collection?.attributes?.layout ?? '';
        const variant = collection?.attributes?.variant ?? '';
        const nameCollection = collection?.__typename ?? '';
        const pgInfo = collection?.itemsConnection?.pageInfo;
        const localTemplate = MapperHelper.getLocalTemplate(
          nameCollection,
          template,
          layout,
          variant,
        );
        console.log('==========================================');
        console.log(`\t RESOLVEID [${id}] [${nameCollection}] [${template}] [${layout}] [${variant}] => [${localTemplate?.localTemplate?.toString()}]`);
        console.log('==========================================');
        let link: ItemLink | null = null;
        if (!!localTemplate) {
          /*if(collection as MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection){
                        console.log("@@ MPlayPage_getPage_sectionInterfacesConnection_sections_Section_collections_PlaceholderCollection");

                    }else*/
          switch(collection?.__typename){
              case 'PlaceholderCollection':
                break
              case 'UserlistCollection':
                break  
              default:
                console.log(`@@@ title :${title}`);
                for (let img of imgs) {
                  if (img as ImageFragment) {
                    const imgAgency = (img as ImageFragment).agency;
                    const imgId = (img as ImageFragment).id;
                    const imgEngine = (img as ImageFragment).engine;
                    const imgType = (img as ImageFragment).type;
                    const imgR = (img as ImageFragment).r;
                    images.push({
                      id: imgId,
                      agency: imgAgency,
                      engine: imgEngine,
                      type: imgType,
                      r: imgR,
                    });
                  }
                }
                const itemsCollection = collection?.itemsConnection?.items ?? [];
                const carouselItems: Array<CarouselItem> =
                  MapperHelper.getCarouselItems(
                    localTemplate,
                    advContext,
                    itemsCollection,
                    link,
                  );
                if (!MapperHelper.isEmpty(carouselItems)) {
                  const carousel: Carousel = {
                    id: uuid(),
                    nameCollection,
                    resolveId: id,
                    type: typename,
                    placeHolderType: null,
                    template: localTemplate,
                    title: title,
                    subtitle: description,
                    imageBackground: null,
                    items: carouselItems ?? [],
                    data: carouselItems ?? [],
                    placeHolder: false,
                    images: images,
                    extras: null,
                    pageInfo: null,
                  };
                  carouselList.push(carousel);
                }
              break;  
          }
        }
      }
    }
    return carouselList;
  };;

  static getCarouselsFromSectionInterfaces = (
    sections: MPlayPage_getPage_sectionInterfacesConnection_sections[],
    advContext?: AdvContextFragment | null,
    includePlaceHoder: boolean = true,
  ): Array<Carousel> => {
    let carouselList: Array<Carousel> = [];
    for (let section of sections) {
      if (!!section) {
        const cList = MapperHelper.getCarouselsFromSection(
          section,
          advContext,
          includePlaceHoder,
        );
        carouselList.push(...cList);
      }
    }
    return carouselList;
  };

  static mapMenu = (data: MPlayMenu | null | undefined): Array<MenuItem> => {
    let pItems: Array<MenuItem> = [];
    let items = data?.getNav?.items ?? [];
    for (let item of items) {
      const needShowForKids = item.showForKids;
      const sitems = item.items ?? [];
      if (!needShowForKids) {
        for (let sitem of sitems) {
          const typename = sitem.__typename;
          const notShow = sitem.disableForNotLogged || sitem.hideForNotLogged;
          if (notShow) {
            continue;
          }
          switch (typename) {
            case 'NavItem':
              const title = sitem.title ?? null;
              if (!title) {
                continue;
              }
              const link: MPlayMenu_getNav_items_items_NavItem_link | null =
                sitem.link;
              const id = uuid();
              let icon = sitem.icon ?? null;
              let referenceId = '';
              let referenceType = '';
              if (!!link) {
                referenceId = link?.referenceId ?? '';
                referenceType = link?.referenceType ?? '';
              }
              pItems.push({
                id,
                title,
                icon,
                referenceId,
                referenceType,
              });
              break;
            case 'PlaceholderNavItem':
            break;
          }
        }
      }
    }
    return pItems;
  };
}

export default MapperHelper;
