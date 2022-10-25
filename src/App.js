/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Utils, Router } from '@lightningjs/sdk'
import Menu from './widgets/Menu'
import routes from './routes/routes'
import { ScreenHeight, ScreenWidth } from './utils/screen'
import PlayerControl from './widgets/PlayerControl'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      ...super._template(),
      Pages: {
        // this hosts all the pages
        forceZIndexContext: true,
      },
      Widgets: {
        Menu: {
          type: Menu,
          x: -300,
          y: 0,
          w: 300,
          h: ScreenHeight(),
          zIndex: 99,
          visible: false,
          lineOffset: 24,
        },
        PlayerControl: {
          type: PlayerControl,
          x: 0,
          y: 0.5,
          w: ScreenWidth(),
          h: ScreenHeight() / 2,
          zIndex: 99,
          visible: true,
        },
      },
    }
  }

  _setup() {
    console.log('App _setup')
    Router.startRouter(routes, this)
  }

  _init() {}
}
