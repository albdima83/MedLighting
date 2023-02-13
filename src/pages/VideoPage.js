import { Lightning, Colors, Router } from '@lightningjs/sdk'
import { width, height } from '../libs/helpers/screenHelper'
import Page from '../utils/page'
import { VideoPlayer } from '@metrological/sdk'
import { ScreenWidth, ScreenHeight } from '../utils/screen'

const precision = 1
const withPrecision = val => Math.round(precision * val) + 'px'
const interfaceTimeout = 5000

class PlayerControllerView extends Lightning.Component {
  static _template() {
    return {
      color: Colors('red').get(),
      rect: true,
    }
  }
}

export default class VideoPage extends Lightning.Component {
  static _template() {
    return {
      h: ScreenHeight(),
      w: ScreenWidth(),
      rect: true,
      color: 0xff000000,
      Ui: {
        type: PlayerControllerView,
        x: 0,
        y: h => h * 0.6,
        w: w => w,
        h: h => h * 0.4,
      },
    }
  }

  _handleLeft() {
    Router.back()
  }

  _handleUp() {
    this._toggleInterface(true)
  }

  _handleDown() {
    this._toggleInterface(false)
  }

  _getFocused() {
    return this.tag('Ui')
  }

  _setInterfaceTimeout() {
    // Clear timeout if it already exists
    if (this._timeout) {
      clearTimeout(this._timeout)
    }

    this._timeout = setTimeout(() => {
      this._toggleInterface(false)
    }, interfaceTimeout)
  }

  _toggleInterface(visible) {
    this.patch({
      smooth: {
        color: visible ? 0xff000000 : 0x00000000,
      },
    })
    if (visible) {
      this._playerAnimation.start()
    } else {
      this._playerAnimation.stop()
    }
  }

  _play(url) {
    const tagVideo = this.tag('VideoPlayer')
    tagVideo.open(url)
  }

  _active() {
    Router.focusPage()
  }

  _inactive() {
    VideoPlayer.hide()
    VideoPlayer.clear()
    this.patch({
      smooth: {
        color: [0xff444444],
      },
    })
  }

  _firstActive() {
    this._toggleInterface(true)
    VideoPlayer.consumer(this)
    //area(top = 0, right = 1920, bottom = 1080, left = 0)
    VideoPlayer.area(0, this.w, this.h, 0)
    VideoPlayer.open(
      'https://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multichannel_subs.m3u8'
    )
  }

  _init() {
    // Initially video control interface is visible
    this._interfaceVisible = true
    // This variable will store timeout id for the interface hide functionality
    this._timeout = null
    this._playerAnimation = this.animation({
      duration: 0.6,
      actions: [{ t: 'Ui', p: 'alpha', v: { 0: 0, 1: 1 } }],
    })
  }
}
