import { Img, Lightning, Utils, Colors } from '@lightningjs/sdk'
import ImageHelper from '../libs/helpers/imageHelper'

export default class PreviewBackground extends Lightning.Component {
  static _template() {
    return {
      Backgrounds: {
        w: w => w,
        h: h => h,
        BackgroundA: {
          w: w => w,
          h: h => h,
          //colorLeft: 0x50ffffff,
          //colorRight: 0x0090cea1,
        },
        BackgroundB: {
          w: w => w,
          h: h => h,
          //colorLeft: 0x40ffffff,
          //colorRight: 0x0090cea1,
        },
      },
      OverlayGradient: {
        w: w => 0.8 * w,
        h: h => h,
        rect: true,
        colorLeft: 0xff000000,
        colorRight: 0x00000000,
      },
    }
  }

  _active() {
    console.log(`ContentPreview _firstActive  w:[${this.w}]`)
    console.log(`ContentPreview _firstActive h:[${this.h}]`)
    this.width = this.w
    this.height = this.h
  }

  _init() {
    this._index = 0
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

    this.tag('BackgroundA')
      .transition('alpha')
      .on('finish', () => {
        if (this._index === 0) {
          this.application.emit('backgroundLoaded')
        }
      })

    this.tag('BackgroundB')
      .transition('alpha')
      .on('finish', () => {
        if (this._index === 1) {
          this.application.emit('backgroundLoaded')
        }
      })

    this.listeners = {
      setBackground: ({ src }) => {
        this._item = null
        this._skip = false
        this._src = src
      },
      readyForBackground: () => {
        if (!this._skip) {
          this._setBackground(this._src)
        }
      },
      setItem: item => {
        if (this._item && item === this._item) {
          this._skip = true
          return
        }
        console.log('@@@ setItem')
        console.log(item)
        this._setBackground(item)
      },
    }
  }

  _attach() {
    ;['setBackground', 'setItem', 'readyForBackground'].forEach(event => {
      this.application.on(event, this.listeners[event])
    })
  }

  _detach() {
    ;['setBackground', 'setItem', 'readyForBackground'].forEach(event => {
      this.application.off(event, this.listeners[event])
    })
  }

  _setBackground(item) {
    if (this._item && item === this._item) {
      this._skip = true
      return
    }
    const dimension = { width: this.width, height: this.height }
    console.log(dimension)
    const imgUrl = ImageHelper.getImageURL(
      item.images,
      'image_header_poster', //'editorial_image_content_preview',
      dimension
    )
    console.log('@@@ imgURL')
    console.log(imgUrl)
    this._src = imgUrl
    if (!!!imgUrl || this._src === this._lastSrc) return
    console.log('@@@ PreviewBackground _setBackground')
    console.log(`@@@ this._index: [${this._index}]`)
    this._lastSrc = this._src
    console.log(this._src)
    //TODO check dimension from parent
    this.tag('Backgrounds').children[this._index].patch({
      texture: {
        type: Lightning.textures.ImageTexture,
        src: this._src,
        mount: 1,
        resizeMode: { type: 'contain', w: this.width, h: this.height },
      },
      alpha: 0.001,
    })
    this._index ^= 1
  }
}
