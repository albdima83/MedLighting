import { Img, Lightning, Utils, Colors, VideoPlayer } from '@lightningjs/sdk'
import ImageHelper from '../libs/helpers/imageHelper'

export default class PreviewBackground extends Lightning.Component {
  static _template() {
    return {
      Backgrounds: {
        w: w => w,
        h: h => h,
        color: 0xff00000000,
        rect: true,
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
        w: h => (h * 9) / 16,
        h: h => h,
        color: 0xff000000,
        rect: true,
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
    }
  }

  _clearVideoTimeout() {
    if (this._timeout) {
      clearTimeout(this._timeout)
    }
  }

  _setVideoTimeout() {
    // Clear timeout if it already exists
    this._clearVideoTimeout()
    this._timeout = setTimeout(() => {
      this._showVideBackground()
    }, 3000)
  }

  _hideVideBackground() {
    VideoPlayer.hide()
    this.tag('Backgrounds').patch({
      smooth: {
        color: [0xff000000],
        alpha: 1,
      },
    })
  }

  _showVideBackground() {
    VideoPlayer.show()
    const width = (this.height * 16) / 9
    const left = this.width - width
    VideoPlayer.area(0, this.width, this.height, left)
    VideoPlayer.open(
      'https://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multichannel_subs.m3u8'
    )
    this.tag('Backgrounds').patch({
      smooth: {
        color: [0x00000000],
        alpha: 0,
      },
    })
  }

  _active() {
    this.width = this.w
    this.height = this.h
  }

  _init() {
    this._index = 0
    this._timeout = null
    this.tag('BackgroundA').on('txLoaded', () => {
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
        this._setBackground(item)
      },
    }
  }

  _attach() {
    VideoPlayer.consumer(this)
    ;['setBackground', 'setItem', 'readyForBackground'].forEach(event => {
      this.application.on(event, this.listeners[event])
    })
  }

  _detach() {
    VideoPlayer.hide()
    ;['setBackground', 'setItem', 'readyForBackground'].forEach(event => {
      this.application.off(event, this.listeners[event])
    })
  }

  _setBackground(item) {
    if (this._item && item === this._item) {
      this._skip = true
      return
    }
    //this._hideVideBackground()
    //this._clearVideoTimeout()
    const dimension = { width: this.width, height: this.height }
    const imgUrl = ImageHelper.getImageURL(
      item.images,
      'image_header_poster', //'editorial_image_content_preview',
      dimension
    )
    this._src = imgUrl
    if (!!!imgUrl || this._src === this._lastSrc) return
    this._lastSrc = this._src
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
    //this._setVideoTimeout()
  }
}
