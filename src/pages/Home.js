import { Router } from '@lightningjs/sdk'
import apollo from '../libs/apollo/index'
import { GET_MENUS } from '../libs/apollo/queries'
import AppConfig from '../libs/configurations/appconfig'
import MapperHelper from '../libs/helpers/mapperHelper'
import GenericPage from './GenericPage'

export default class Home extends GenericPage {
  static _template() {
    return {
      ...super._template(),
    }
  }

  _focus() {}

  _handleAppClose() {}

  _handleLeft() {
    Router.focusWidget('Menu')
    this.widgets.menu.show()
  }

  _handleBack() {
    Router.focusWidget('Menu')
    this.widgets.menu.show()
  }

  async _loadMenu() {
    const data = {
      query: GET_MENUS,
      variables: {
        id: AppConfig.navMain,
        first: 0,
      },
    }
    const response = await apollo.query(data)
    const mItems = MapperHelper.mapMenu(response.data)
    this.widgets.menu.items = mItems
  }

  async _loadData() {
    this._loadMenu()
    this._loadPage(AppConfig.homepage)
  }

  _active() {}

  _build() {}

  _init() {}

  _inactive() {}
}
