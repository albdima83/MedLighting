import { Lightning, Utils, Colors, Router } from '@lightningjs/sdk'
import { List } from '@lightningjs/ui'
import CarouselItem from '../CarouselItem'
import { getCarouselWidth, getCarouselHeight } from '../../libs/helpers/dimensionsHelper'
import ImageHelper from '../../libs/helpers/imageHelper'

export class BillboardBigCollection extends Lightning.Component {
  static _template() {
    return {
      Fill: { w: w => w, h: h => h, color: Colors('#000').get(), rect: true },
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
      OverlayGradientW: {
        w: w => 0.8 * w,
        h: h => h,
        rect: true,
        colorLeft: 0xff000000,
        colorRight: 0x00000000,
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
      ContentData: {
        x: 32,
        y: 54,
        w: w => w * 0.6,
        h: h => h * 0.6,
        color: 0xffaaaaaa,
        clipped: true,
        Logo: {
          x: 0,
          w: w => w,
          h: 150,
          color: 0xffeeaa88,
          rect: true,
          visible: false,
        },
        Title: {
          x: 0,
          w: w => w,
          color: 0xffeeaa88,
          rect: true,
          visible: false,
          Label: {
            w: w => w,
            text: {
              maxLines: 2,
              text:
                'TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO TITOLO',
              fontSize: 38,
              fontFace: 'Regular',
            },
          },
        },
        Subtitle: {
          x: 0,
          w: w => w,
          visible: false,
          color: 0xffeeaa88,
          rect: true,
          Label: {
            text: {
              maxLines: 3,
              text: 'SOTTOTITOLO',
              fontSize: 28,
              fontFace: 'Regular',
            },
          },
        },
      },
      HList: {
        x: 32,
        w: w => w,
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
  }

  _changeBackground(index) {
    if (!this._loaded) return
    const its = this._item.items || []
    if (!!!its || its.length == 0 || index < 0 || index > its.length) return
    this._currentIndex = index
    const item = its[this._currentIndex]
    this._setBackground(item)
  }

  _firstActive() {
    this._loaded = true
    this._changeBackground(this._currentIndex)
    const itHeight = !!this._item.layout.itemLayout.height
      ? getCarouselHeight(this.h, this._item.layout.itemLayout.height || 0)
      : 0

    this.tag('HList').patch({
      y: this.h - itHeight - 34,
    })
  }

  _updateContentPreview(tag, contentPreview) {
    const { title, subtitle, logo } = contentPreview
    const tContentData = this.tag(tag)
    let y = 0
    if (!!logo) {
      y += 150 + 10
      tContentData.tag('Logo').patch({
        visible: true,
        h: 150,
        w: 320,
        texture: {
          type: Lightning.textures.ImageTexture,
          src: 'https://newctv.eu.ngrok.io/static/images/logo-mplay-infinity-new.png',
          resizeMode: { type: 'cover', h: 150, w: 320 },
          clipY: 0,
        },
      })
    } else {
      tContentData.tag('Logo').patch({
        visible: false,
      })
    }
    if (!!title) {
      tContentData.tag('Title').patch({
        y: y,
        text: { tex: title },
        visible: true,
      })
      y += 80 + 10
    } else {
      tContentData.tag('Logo').patch({
        visible: false,
      })
    }
    if (!!subtitle) {
      tContentData.tag('Subtitle').patch({
        y: y,
        text: { tex: title },
        visible: true,
      })
    } else {
      tContentData.tag('Subtitle').patch({
        visible: false,
      })
    }
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
    const itFTemplate = this._item.template.itemsFallbackTemplateImage || null
    const showTitle = this._item.layout.itemLayout.showTitle || false
    console.log(`itWidth: [${itWidth}]`)
    console.log(`itHeight: [${itHeight}]`)
    console.log(`itTemplate: [${itTemplate}]`)
    console.log(`itFTemplate: [${itFTemplate}]`)
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
          hasContentPreview: false,
        },
        margin: 16,
        w: itWidth,
        h: itHeight,
      })
    })
    this.tag('HList').add(items)
    this.tag('HList').scroll = {
      after: 1, //start scrolling after 3 items
      jump: 1, //after three items jump three Items
      forward: 0.9, //unless last item: scroll forward if item bounds are after 90% of the List, or if value is above 1; scroll after f.e. 900 pixels
      backward: 0.1, //unless first item: scroll backward if item bounds are before 10% of the List, or if value is above 1; scroll before f.e. 50 pixels
    }
  }

  _setBackground(item) {
    if (this._item && item === this._item) {
      this._skip = true
      return
    }
    console.log('@@@ BillbaordCollection _setBackground')
    console.log(this._item)
    const dimension = { width: this.w, height: this.h }
    console.log(dimension)
    let imgUrl = ImageHelper.getImageURL(item.images, 'image_header_poster', dimension, '@2')
    if (!!!imgUrl) {
      imgUrl = ImageHelper.getImageURL(item.images, 'editorial_image_hero', dimension, '@2')
    }
    console.log('@@@ imgURL')
    console.log(imgUrl)
    this._src = imgUrl

    if (!!!imgUrl || this._src === this._lastSrc) return
    console.log('@@@ PreviewBackground _setBackground')
    console.log(`@@@ this._backgroundIndex: [${this._backgroundIndex}]`)
    this._lastSrc = this._src
    console.log(this._src)
    this.tag('Backgrounds').children[this._backgroundIndex].patch({
      w: this.w,
      h: this.h,
      texture: {
        type: Lightning.textures.ImageTexture,
        src: this._src,
        mount: 0,
        resizeMode: { type: 'cover', w: this.w, h: this.h },
      },
      alpha: 0.001,
    })
    this._backgroundIndex ^= 1
    /*
    this._updateContentPreview('ContentData', {
      logo: 'https://newctv.eu.ngrok.io/static/images/logo-mplay-infinity-new.png',
      title: 'jlkhjew hwerjk hwekjrhwejkr hwejk rhewjkrh wejkr',
      subtitle: '324234 jwekr',
    })*/
  }

  _construct() {
    this._loaded = false
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
