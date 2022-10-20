import { Launch } from '@lightningjs/sdk'
import App from './App.js'
import { ScreenWidth, ScreenHeight } from './utils/screen'

const appSettings = {
  debug: true,
  stage: {
    w: ScreenWidth(),
    h: ScreenHeight(),
    clearColor: '0x00000000',
    useImageWorker: true,
  },
  //useImageWorker: true,
  //inspector: true,
  //esEnv: 'es5'
}

const platformSettings = {
  path: './static',
  log: true,
  lazyCreate: false,
  lazyDestroy: false,
  gcOnUnload: false,
  backtracking: true,
  reuseInstance: false,
  destroyOnHistoryBack: true,
  //proxyUrl: 'https://proxyURL.com',
}
/*
options.keys = {
    38: "Up",
    40: "Down",
    37: "Left",
    39: "Right",
    13: "Enter",
    83: "Search" // Map s to search
};
*/
export default function() {
  return Launch(App, appSettings, platformSettings, ...arguments)
}
