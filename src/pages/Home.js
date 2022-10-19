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

  _focus() {
    console.log('Home _focus')
  }

  _handleAppClose() {
    console.log('Close app')
  }

  _handleLeft() {
    console.log('Home _handleLeft')
    console.log(this.widgets)
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
    console.log(data)
    const response = await apollo.query(data)
    console.log('@@@ _loadData')
    console.log(response)
    console.log(this.widgets.menu)
    const mItems = MapperHelper.mapMenu(response.data)
    console.log('MapperHelper.mapMenu')
    console.log(mItems)
    this.widgets.menu.items = mItems
  }

  async _loadData() {
    this._loadMenu()
    this._loadPage(AppConfig.homepage)
  }

  _build() {
    this._loadData()
  }

  _init() {}

  _inactive() {}
}
