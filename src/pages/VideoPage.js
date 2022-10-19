import { Lightning, Colors, Router } from '@lightningjs/sdk'
import { width, height } from '../libs/helpers/screenHelper'
import Page from '../utils/page'

const precision = 1
const withPrecision = val => Math.round(precision * val) + 'px'

export default class VideoPage extends Page {
  static _template() {
    return {
      Video: {
        alpha: 1,
        visible: false,
        pivot: 0.5,
        texture: { type: Lightning.textures.StaticTexture, options: {} },
      },
    }
  }

  _handleLeft() {
    Router.back()
  }

  _handleUp() {
    Router.focusWidget('PlayerControl')
    this.widgets.playercontrol.show()
  }

  _play(url) {
    const videoEls = document.getElementsByTagName('video')
    if (videoEls && videoEls.length) {
      const video = videoEls[0]
      video.pause()
      video.setAttribute('src', url)
      video.load()
      video.play()
    }
  }

  _setupVideoTag() {
    const videoEls = document.getElementsByTagName('video')
    if (videoEls && videoEls.length) {
      return videoEls[0]
    } else {
      const videoEl = document.createElement('video')
      const platformSettingsWidth = width
      const platformSettingsHeight = height
      videoEl.setAttribute('id', 'video-player')
      videoEl.setAttribute('width', withPrecision(platformSettingsWidth))
      videoEl.setAttribute('height', withPrecision(platformSettingsHeight))
      videoEl.style.background = 'black'
      videoEl.style.position = 'absolute'
      videoEl.style.zIndex = '1'
      //videoEl.style.display = 'none'
      //videoEl.style.visibility = 'hidden'
      videoEl.style.top = withPrecision(0)
      videoEl.style.left = withPrecision(0)
      videoEl.style.width = withPrecision(platformSettingsWidth)
      videoEl.style.height = withPrecision(platformSettingsHeight)
      document.body.appendChild(videoEl)
      return videoEl
    }
  }

  _firstActive() {
    this._play(
      'https://d3rlna7iyyu8wu.cloudfront.net/skip_armstrong/skip_armstrong_multichannel_subs.m3u8'
    )
  }

  _init() {
    this._setupVideoTag()
  }
}
