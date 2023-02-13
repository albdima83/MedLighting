import { Lightning, Router } from '@lightningjs/sdk'

export default class Error extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xffb70606,
      Label: {
        x: 100,
        y: 100,
        text: {
          text: 'Error',
          fontSize: 22,
        },
      },
    }
  }

  _handleEnter() {
    Router.navigate('main')
  }

  _focus() {}

  set error(obj) {
    const { page, error } = obj
    const errorMessage = `
error while loading page: ${page.constructor.name}
press enter to navigate to home
--
loaded via hash: ${page[Symbol.for('hash')]}
resulted in route: ${page[Symbol.for('route')]}
--
${error.toString()}`

    this.tag('Label').text = errorMessage
  }

  easing() {
    return 'up'
  }
}
