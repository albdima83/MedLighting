import { Lightning, Utils, Router, Colors } from '@lightningjs/sdk'
import { ScreenWidth, ScreenHeight } from '../utils/screen'

export default class Page extends Lightning.Component {
  static _template() {
    return {
      h: ScreenHeight(),
      w: ScreenWidth(),
      rect: true,
      color: 0x00000000,
    }
  }
}
