import { NotFound, Splash, Home, VideoPage } from '../pages'

export default {
  root: () => {
    return new Promise(resolve => {
      resolve('splash')
    })
  },
  routes: [
    {
      path: '$',
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
