import { Router } from '@lightningjs/sdk'
import { List } from '@lightningjs/ui'
import { VideoList } from '../components/carousels/VideoList'
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
        w: this.w,
        h: this.h * 0.5,
      },
      Background: {
        w: w => w,
        y: h => h / 2,
        h: h => h / 2,
        rect: true,
        color: 0xff000000,
      },
      OverlayGradient: {
        w: 60,
        h: h => h,
        rect: true,
        colorLeft: 0xff000000,
        colorRight: 0x00000000,
      },
      PageList: {
        w: w => w,
        h: h => h * 2,
        type: List,
        spacing: 54,
        direction: 'column',
      },

      OverlayGradientBottom: {
        x: 0,
        y: h => h * 0.8,
        w: w => w,
        h: h => h * 0.2,
        rect: true,
        colorTop: 0x00000000,
        colorBottom: 0xaa000000,
        zIndex: 10,
      },
    }
  }

  _construct() {
    this._index = 0
    this._items = []
  }

  _active() {
    Router.focusPage()
  }

  _firstActive() {
    this.tag('ContentPreview').patch({
      w: this.w,
      h: this.h * 0.5,
    })
    this._loadData()
  }

  _focus() {}

  _getFocused() {
    return this.tag('PageList')
  }

  _handleAppClose() {}

  _handleLeft() {
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
      const template = LocalCarouselTemplate[type]
      const layout = LayoutTemplates[type]
      if (!!!layout) return
      const wItem = !!layout ? getCarouselWidth(this.w, layout.width || 0) : 0
      const hItem = !!layout ? getCarouselHeight(this.h, layout.height || 0) : 0
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
              type: VideoList,
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
      let scroll = 0
      if (index > 0) {
        scroll = this.h / 2 - itemWrapper.assignedY - 54
      }
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
    const response = await apollo.query(data)
    const sections = response.data.getPage.sectionInterfacesConnection.sections || []
    const cls = MapperHelper.getCarouselsFromSectionInterfaces(sections, null, false)
    const clsSupported =
      cls.filter(cl =>
        !!cl.template.localTemplate
          ? CAROUSEL_SUPPORTED.length == 0 ||
            CAROUSEL_SUPPORTED.indexOf(cl.template.localTemplate) > -1
          : false
      ) || []
    this._items = clsSupported
    this._loadTemplates()
  }

  _init() {}

  _inactive() {}
}
