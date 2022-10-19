import { Lightning, Colors, Router } from '@lightningjs/sdk'
import Route from '@lightningjs/sdk/src/Router/model/Route'
import { List } from '@lightningjs/ui'

class ExampleButton extends Lightning.Component {
  static _template() {
    return {
      color: 0xff1f1f1f,
      texture: Lightning.Tools.getRoundRect(150, 40, 4),
      Label: {
        x: 75,
        y: 22,
        mount: 0.5,
        color: 0xffffffff,
        text: { fontSize: 20 },
      },
    }
  }
  _init() {
    this.tag('Label').patch({ text: { text: this.buttonText } })
  }
  _focus() {
    this.color = 0xffffffff
    this.tag('Label').color = 0xff1f1f1f
  }
  _unfocus() {
    this.color = 0xff1f1f1f
    this.tag('Label').color = 0xffffffff
  }
}

export default class PlayerControl extends Lightning.Component {
  static _template() {
    return {
      Fill: { x: 0, y: 0, w: w => w, h: h => h / 2, color: Colors('#222').get(), rect: true },
      Buttons: {
        LeftButton: { type: ExampleButton, buttonText: 'Left' },
        RightButton: { x: 200, type: ExampleButton, buttonText: 'Right' },
      },
    }
  }

  _construct() {
    console.log('Menu _init _construct')
    this._index = 0
    this._items = []
  }

  _getFocused() {
    console.log('Menu _getFocused')
    return this.tag('LeftButton')
  }

  _active() {
    console.log('Menu _active')
  }

  _firstActive() {}

  _unfocus() {
    this.hide()
  }

  _handleUp() {}

  _handleLeft() {}

  _handleDown() {
    Router.focusPage()
  }

  show() {
    /*
    this.patch({
      smooth: { alpha: 1 },
    })*/
  }

  hide() {
    /*
    this.patch({
      smooth: { alpha: 0, y: -1 * this.h },
    })*/
  }
}
