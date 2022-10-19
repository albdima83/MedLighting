import { Router, Colors } from '@lightningjs/sdk'
import { List } from '@lightningjs/ui'
import { HorizontalList } from '../components/HorizontalList'
import Page from '../utils/page'
import apollo from '../libs/apollo/index'
import { GET_PAGE } from '../libs/apollo/queries'
import MapperHelper from '../libs/helpers/mapperHelper'
import { LocalCarouselTemplate } from '../libs/models/app.models'
import { LayoutTemplates } from '../libs/configurations/layout'
import { getCarouselWidth, getCarouselHeight } from '../libs/helpers/dimensionsHelper'
import PreviewBackground from '../components/PreviewBackground'
import { BillboardBigCollection } from '../components/carousels/BillboardBigCollection'

const CAROUSEL_SUPPORTED = [
  LocalCarouselTemplate.BillboardCollection,
  LocalCarouselTemplate.BillboardCollectionInline,
  LocalCarouselTemplate.VideoBrandedCollection,
  LocalCarouselTemplate.PosterCollection,
  LocalCarouselTemplate.OptionCollection,
  LocalCarouselTemplate.NavCollection,
  LocalCarouselTemplate.KeyFrameCollection,
  LocalCarouselTemplate.OnAirCollection,
  LocalCarouselTemplate.ScheduleCollection,
]

export default class GenericPage extends Page {
  static _template() {
    return {
      ...super._template(),
      ContentPreview: {
        type: PreviewBackground,
      },
      PageList: {
        type: List,
        spacing: 60,
        direction: 'column',
      },
    }
  }

  _construct() {
    this._index = 0
    this._items = []
  }

  _active() {
    console.log('Home _active')
    console.log(this.widgets)
    Router.focusPage()
  }

  _firstActive() {
    console.log('Home _firstActive')
    console.log(Router.getActivePage())
    this.tag('ContentPreview').patch({
      w: this.w,
      h: this.h * 0.5,
    })
  }

  _focus() {
    console.log('Home _focus')
  }

  _getFocused() {
    console.log('Home _getFocused')
    return this.tag('PageList')
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

  _loadTemplates() {
    this.cItems = []
    this._items.forEach(item => {
      const type = item.template.localTemplate || -1
      console.log(`type [${type}]`)
      const template = LocalCarouselTemplate[type]
      const layout = LayoutTemplates[type]
      console.log(`template [${template}]`)
      console.log(`layout [${layout}]`)
      if (!!!layout) return
      console.log(layout)
      const wItem = !!layout ? getCarouselWidth(this.w, layout.width || 0) : 0
      const hItem = !!layout ? getCarouselHeight(this.h, layout.height || 0) : 0
      console.log(`_loadTemplates w [${this.w}] `)
      console.log(`_loadTemplates h [${this.h}] `)
      console.log(`_loadTemplates wItem [${wItem}] `)
      console.log(`_loadTemplates hItem [${wItem}] `)
      if (hItem > 0) {
        item.layout = layout
        switch (type) {
          //case LocalCarouselTemplate.BillboardBigCollection:
          case LocalCarouselTemplate.BillboardCollection:
            //case LocalCarouselTemplate.BillboardCollectionInline:
            this.cItems.push({
              type: BillboardBigCollection,
              item: item,
              h: hItem,
              w: wItem,
            })
            break

          case LocalCarouselTemplate.NavCollection:
            break
          case LocalCarouselTemplate.PosterCollection:
          case LocalCarouselTemplate.OnAirCollection:
          case LocalCarouselTemplate.VideoBrandedCollection:
          case LocalCarouselTemplate.KeyFrameCollection:
          case LocalCarouselTemplate.OptionCollection:
          case LocalCarouselTemplate.ScheduleCollection:
            this.cItems.push({
              type: HorizontalList,
              item: item,
              h: hItem,
              w: wItem,
            })
            break
        }
      }
    })

    this.tag('PageList').add(this.cItems)
    this.tag('PageList').scroll = (itemWrapper, indexData) => {
      const previousIndex = indexData.previousIndex
      const index = indexData.index
      const direction = index > previousIndex ? 1 : -1
      console.log('PageList scroll')
      console.log(`PageList previousIndex: [${previousIndex}]`)
      console.log(`PageList index: [${index}]`)
      console.log(`PageList direction: [${direction}]`)
      console.log('PageList itemWrapper')
      console.log(itemWrapper)
      console.log('PageList indexData')
      console.log(indexData)
      //scrollNext
      if (direction > 0) {
        const nextItemWrapper = this.tag('PageList').itemWrappers[index - 1]
        nextItemWrapper.setSmooth('alpha', 0)
      } else {
        //scrollPrevious
        const previousItemWrapper = this.tag('PageList').itemWrappers[index]
        previousItemWrapper.setSmooth('alpha', 1)
      }
      //itemWrapper.setSmooth('alpha', 0)
      const scroll = index == 0 ? 0 : -300 //(-1 * ((index + 1) * this.h)) / 2
      console.log(`PageList scroll [${scroll}]`)
      return scroll
    }

    this.tag('PageList').setIndex(0)
  }

  async _loadPage(id) {
    const data = {
      query: GET_PAGE,
      variables: {
        id: id,
        first: 0,
      },
    }
    console.log(data)
    const response = await apollo.query(data)
    console.log('@@@ _loadHomePage')
    console.log(response)
    const sections = response.data.getPage.sectionInterfacesConnection.sections || []
    const cls = MapperHelper.getCarouselsFromSectionInterfaces(sections, null, false)
    const clsSupported =
      cls.filter(cl =>
        !!cl.template.localTemplate
          ? CAROUSEL_SUPPORTED.length == 0 ||
            CAROUSEL_SUPPORTED.indexOf(cl.template.localTemplate) > -1
          : false
      ) || []
    console.log(clsSupported)
    this._items = clsSupported
    this._loadTemplates()
  }

  _init() {}

  _inactive() {}
}
