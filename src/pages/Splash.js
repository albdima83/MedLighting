import { Lightning, Utils, Router } from '@lightningjs/sdk'
import Page from '../utils/page'
import AppConfig from '../libs/configurations/appconfig'
import { RemoteConfigMockup } from '../libs/mockup'
import APIService from '../libs/services/apiservice'
import AsyncStorage from '../libs/storage/index'

export default class Splash extends Page {
  static _template() {
    return {
      ...super._template(),
      Background: {
        colorBottom: 0xff000000,
        scale: 10,
        src: Utils.asset('images/background.png'),
        transitions: {
          scale: {
            duration: 2,
            forward: true,
            timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
          },
        },
      },
      Logo: {
        src: Utils.asset('images/logo-mplay-infinity-new.png'),
        mount: 0.5,
        alpha: 0.001,
        x: w => w / 2,
        y: h => h / 2,
        transitions: {
          alpha: { duration: 1, timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)' },
          y: { duration: 1, timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)' },
        },
      },
      Spinner: {
        src: Utils.asset('images/spinner.png'),
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2 + 120,
        alpha: 0.001,
        color: 0xaaffffff,
        transitions: {
          alpha: { duration: 1, timingFunction: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)' },
        },
      },
    }
  }

  async _loadApplication() {
    AppConfig.remoteConfig = RemoteConfigMockup
    const data = await APIService.anonymousLogin()
    if (data) {
      try {
        await AsyncStorage.setItem('it.mediaset.authorization', data.response.beToken || '')
        await AsyncStorage.setItem('it.mediaset.sid', data.response.sid || '')
      } catch (ex) {
        console.log(ex)
      }
    }
    Router.navigate('home', false)
  }

  _firstActive() {
    this._loadApplication()
  }

  _init() {
    this.tag('Logo').on('txLoaded', () => {
      this.tag('Logo').setSmooth('alpha', 1)
      //this.tag('Logo').setSmooth('y', this.h / 2)
      this.tag('Background').setSmooth('scale', 1)
    })

    this.tag('Spinner').on('txLoaded', () => {
      this.tag('Spinner').setSmooth('alpha', 1)
      this._spinnerAnimation.start()
    })

    this._spinnerAnimation = this.animation({
      duration: 1,
      repeat: -1,
      actions: [
        {
          t: 'Spinner',
          p: 'rotation',
          sm: 0,
          v: function(t) {
            if (t < 0.125) {
              return 45 * (Math.PI / 180)
            } else if (t < 0.25) {
              return 90 * (Math.PI / 180)
            } else if (t < 0.375) {
              return 135 * (Math.PI / 180)
            } else if (t < 0.5) {
              return 180 * (Math.PI / 180)
            } else if (t < 0.625) {
              return 225 * (Math.PI / 180)
            } else if (t < 0.75) {
              return 270 * (Math.PI / 180)
            } else if (t < 0.875) {
              return 315 * (Math.PI / 180)
            } else if (t < 1) {
              return 360 * (Math.PI / 180)
            }
          },
        },
      ],
    })

    /*
    setTimeout(() => {
      //Router.navigate('movie', false)
      Router.navigate('home', false)
    }, 3000)*/
  }

  _inactive() {
    this._spinnerAnimation.stop()
  }
}
