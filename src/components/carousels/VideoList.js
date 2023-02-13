import { Lightning, Utils, Colors, Router } from '@lightningjs/sdk'
import { List } from '@lightningjs/ui'
import CarouselItem from '../CarouselItem'
import { getCarouselWidth, getCarouselHeight } from '../../libs/helpers/dimensionsHelper'

export class VideoList extends Lightning.Component {
  static _template() {
    return {
      Label: {
        x: 32,
        y: 0,
        color: 0xff767676,
        text: { fontSize: 32, fontFace: 'Regular' },
        zIndex: 1,
      },
      HList: {
        x: 32,
        y: 64,
        w: w => w,
        type: List,
        direction: 'row',
        signals: {
          onIndexChanged: '_onIndexChanged',
          onRequestItems: '_onRequestItems',
        },
      },
    }
  }

  _getFocused() {
    return this.tag('HList')
  }
  _focus() {
    //this.tag('HList').setSmooth('alpha', 1)
    this.tag('Label').patch({
      color: 0xffffffff,
    })
  }

  _unfocus() {
    //this.tag('HList').setSmooth('alpha', 0)
    this.tag('Label').patch({
      color: 0xff767676,
    })
  }

  _loadNext(indexData) {
    const { index, previousIndex, dataLength } = indexData
    const items = this._items
    const hList = this.tag('HList')
    return new Promise((resolve, reject) => {
      if (!!items) {
        hList.add(items)
        resolve(items)
      } else {
        resolve(false)
      }
    })
  }

  _onRequestItems(indexData) {
    const { index, previousIndex, dataLength } = indexData
    return this._loadNext(indexData)
  }

  _onIndexChanged(indexData) {
    const { index, previousIndex, dataLength } = indexData
    /*
    if (index > 0 && index % 5 == 0) {
      this.tag('HList').setIndex(0)
    }
    */
  }
  set item(it) {
    this._item = it
    this._updateList()
  }

  _updateList() {
    const items = []
    const its = this._item.items || []
    const itWidth = !!this._item.layout.itemLayout.width
      ? getCarouselWidth(this.w, this._item.layout.itemLayout.width || 0)
      : 0
    const itHeight = !!this._item.layout.itemLayout.height
      ? getCarouselHeight(this.h, this._item.layout.itemLayout.height || 0)
      : 0
    const itTemplate = this._item.template.itemsTemplateImage || null
    const itFTemplate = this._item.template.fallBackItemsTemplateImage || null
    const showTitle = this._item.layout.itemLayout.showTitle || false
    const title = this._item.title || ''
    this.tag('Label').patch({
      text: {
        text: title,
      },
    })
    its.forEach(item => {
      items.push({
        type: CarouselItem,
        item: {
          title: item.title,
          images: item.images,
          template: itTemplate,
          fallbackTemplate: itFTemplate,
          showTitle,
          hasContentPreview: false,
        },
        margin: 16,
        w: itWidth,
        h: itHeight,
      })
    })
    this._items = items
    this.tag('HList').add(items)
    this.tag('HList').scroll = {
      after: 0, //start scrolling after 3 items
      jump: 1, //after three items jump three Items
      forward: 0.9, //unless last item: scroll forward if item bounds are after 90% of the List, or if value is above 1; scroll after f.e. 900 pixels
      backward: 0.1, //unless first item: scroll backward if item bounds are before 10% of the List, or if value is above 1; scroll before f.e. 50 pixels
    }
    this.tag('HList').enableRequests = true
    this.tag('HList').requestThreshold = 3
  }

  _construct() {
    this._items = []
  }

  _init() {}
}
