import { Lightning, Colors, Router } from '@lightningjs/sdk'
import Route from '@lightningjs/sdk/src/Router/model/Route'
import { List } from '@lightningjs/ui'

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      OverlayGradient: {
        w: 60,
        h: h => h,
        rect: true,
        colorLeft: 0xff000000,
        colorRight: 0x00000000,
        MenuList: {
          type: List,
          direction: 'column',
        },
      },
      MenuList: {
        type: List,
        direction: 'column',
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
    return this.tag('MenuList')
  }

  set items(v) {
    console.log('Menu set items')
    console.log(v)
    this._items = v || []
    this._updateMenuList()
  }

  _active() {
    console.log('Menu _active')
  }

  _firstActive() {}

  _updateMenuList() {
    console.log('Menu _updateMenuList')
    console.log(this._items)
    if (!!!this._items || this._items.length == 0) {
      return
    }
    const mItems = []
    this._items.forEach(item => {
      console.log(item)
      mItems.push({
        type: MenuItem,
        label: item.title,
        id: item.id,
        selected: item.selected,
      })
    })
    console.log(mItems)
    this.tag('MenuList').add(mItems)
  }

  _unfocus() {
    this.hide()
  }

  _handleDown() {}

  _handleUp() {}

  _handleLeft() {}

  _handleRight() {
    Router.focusPage()
  }

  select(id, fastForward) {
    if (id === this._id) return

    this._id = id
    let y = 0

    this.tag('Items').children.forEach((item, index) => {
      item.setSmooth('y', y, { duration: fastForward ? 0 : 0.3 })
      if (id === item.id) {
        this._currentIndex = index
        this.tag('Lines').setSmooth('y', (index + 1) * 48, {
          duration: fastForward ? 0 : 0.3,
          timingFunction: 'cubic-bezier(.21,.5,.48,.93)',
        })
        y += 810
      }
      y += 48
      item.selected = item.id === id
    })

    this.tag('Top').setSmooth('h', 400, {
      duration: 0.3,
      timingFunction: 'cubic-bezier(.94,.42,.49,.99)',
    })
    this.tag('Bottom').setSmooth('h', 390, {
      duration: 0.3,
      timingFunction: 'cubic-bezier(.94,.42,.49,.99)',
    })
  }

  set lineOffset(v) {
    this._lineOffset = v
  }

  show() {
    this.patch({
      smooth: { alpha: 1, x: 0 },
    })
  }

  hide() {
    this.patch({
      smooth: { alpha: 0, x: -1 * this.w },
    })
  }
}

class MenuItem extends Lightning.Component {
  static _template() {
    return {
      Label: {
        text: { fontSize: 28, fontFace: 'Regular', color: 'red' },
      },
    }
  }

  set label(v) {
    this._label = v

    this.patch({
      Label: {
        text: { text: this._label },
      },
    })
  }

  set selected(v) {
    this.tag('Label').color = v ? 0xffffffff : 0xff767676
  }

  set id(v) {
    this._id = v
  }

  _focus() {
    console.log('MenuItem _focus')
    this.tag('Label').patch({
      color: 0xffffffff,
    })
  }

  _unfocus() {
    console.log('MenuItem _unfocus')
    this.tag('Label').patch({
      color: 0xff767676,
    })
  }

  get id() {
    return this._id
  }

  static get width() {
    return 300
  }

  static get height() {
    return 40
  }
}
