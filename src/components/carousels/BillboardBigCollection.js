import { Lightning, Utils, Colors, Router } from '@lightningjs/sdk'
import { List } from '@lightningjs/ui'
import CarouselItem from '../CarouselItem'
import { getCarouselWidth, getCarouselHeight } from '../../libs/helpers/dimensionsHelper'
import ImageHelper from '../../libs/helpers/imageHelper'

export class BillboardBigCollection extends Lightning.Component {
  static _template() {
    return {
      Fill: { w: w => w, h: h => h, color: Colors('#222').get(), rect: true },
      Backgrounds: {
        w: w => w,
        h: h => h,
        BackgroundA: {
          w: w => w,
          h: h => h,
        },
        BackgroundB: {
          w: w => w,
          h: h => h,
        },
      },
      OverlayGradient: {
        x: 0,
        y: h => h * 0.3,
        w: w => w,
        h: h => h * 0.7,
        rect: true,
        colorBottom: 0xff000000,
        colorTop: 0x00000000,
      },
      HList: {
        w: w => w,
        y: h => h - 260,
        mountY: 1,
        type: List,
        direction: 'row',
        signals: { onIndexChanged: '_onHlistIndexChanged' },
      },
    }
  }

  _getFocused() {
    console.log('BillboardBigCollection _getFocused')
    return this.tag('HList')
  }
  _focus() {
    //this.setSmooth('alpha', 1)
  }

  _unfocus() {
    //this.setSmooth('alpha', 0)
  }

  set item(it) {
    console.log('BillboardBigCollection set item')
    console.log(it)
    this._item = it
    this._updateList()
  }

  _onHlistIndexChanged(indexData) {
    console.log(indexData)
    const { index, previousIndex, dataLength } = indexData
    console.log('HList onIndexChanged')
    console.log(`index:[${index}] previousIndex:[${previousIndex}] dataLength:[${dataLength}]`)
    this._changeBackground(index)
    /*
    if (index > 0 && index % 5 == 0) {
      this.tag('HList').setIndex(0)
    }
    */
  }

  _changeBackground(index) {
    const its = this._item.items || []
    if (!!!its || its.length == 0 || index < 0 || index > its.length) return
    this._currentIndex = index
    const item = its[this._currentIndex]
    this._setBackground(item)
  }

  _firstActive() {
    this._changeBackground(this._currentIndex)
  }

  _updateList() {
    console.log('BillboardBigCollection _updateMenuList')
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
    console.log(`itWidth: [${itWidth}]`)
    console.log(`itHeight: [${itHeight}]`)
    console.log(its)
    its.forEach(item => {
      items.push({
        type: CarouselItem,
        item: {
          title: item.title,
          images: item.images,
          template: itTemplate,
          fallbackTemplate: itFTemplate,
          showTitle,
        },
        margin: 16,
        w: itWidth,
        h: itHeight,
      })
    })
    this.tag('HList').add(items)
    this.tag('HList').scroll = {
      after: 3, //start scrolling after 3 items
      jump: 3, //after three items jump three Items
      forward: 0.9, //unless last item: scroll forward if item bounds are after 90% of the List, or if value is above 1; scroll after f.e. 900 pixels
      backward: 0.1, //unless first item: scroll backward if item bounds are before 10% of the List, or if value is above 1; scroll before f.e. 50 pixels
    }
  }

  _setBackground(item) {
    if (this._item && item === this._item) {
      this._skip = true
      return
    }
    const dimension = { width: this.w, height: this.h }
    console.log(dimension)
    const imgUrl = ImageHelper.getImageURL(item.images, 'editorial_image_hero', dimension)
    console.log('@@@ imgURL')
    console.log(imgUrl)
    this._src = imgUrl
    if (!!!imgUrl || this._src === this._lastSrc) return
    console.log('@@@ PreviewBackground _setBackground')
    console.log(`@@@ this._backgroundIndex: [${this._backgroundIndex}]`)
    this._lastSrc = this._src
    console.log(this._src)
    this.tag('Backgrounds').children[this._backgroundIndex].patch({
      texture: {
        type: Lightning.textures.ImageTexture,
        src: this._src,
        mount: 0,
        resizeMode: { type: 'cover', w: this.w, h: this.h },
      },
      alpha: 0.001,
    })
    this._backgroundIndex ^= 1
  }

  _construct() {
    this._backgroundIndex = 0
    this._currentIndex = 0
  }

  _init() {
    this.tag('BackgroundA').on('txLoaded', () => {
      console.log('@@@ ContentPreview BackgroundA LOADED')
      this.tag('BackgroundA').setSmooth('alpha', 1, {
        duration: 0.6,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      })
      this.tag('BackgroundB').setSmooth('alpha', 0, {
        duration: 0.3,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      })
    })

    this.tag('BackgroundB').on('txLoaded', () => {
      console.log('@@@ ContentPreview BackgroundB LOADED')
      this.tag('BackgroundB').setSmooth('alpha', 1, {
        duration: 0.6,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      })
      this.tag('BackgroundA').setSmooth('alpha', 0, {
        duration: 0.3,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      })
    })
  }
}
