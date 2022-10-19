import { NotFound, Splash, Home, VideoPage } from '../pages'

export default {
  bootComponent: Splash,
  root: () => {
    return new Promise(resolve => {
      resolve('splash')
    })
  },
  routes: [
    {
      path: 'splash',
      component: Splash,
    },
    {
      path: 'home',
      component: Home,
      widgets: ['Menu'],
    },
    {
      path: 'video',
      component: VideoPage,
      widgets: ['PlayerControl'],
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
}
