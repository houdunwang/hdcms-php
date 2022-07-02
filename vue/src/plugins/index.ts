import { App } from 'vue'
import setupTailwindcss from './tailwindcss'
import setupElementPlus from './elementui'
import _ from 'lodash'
import setupPinia from './pinia'
import setupIconPark from './iconpark'
import setupDayjs from './dayjs'
import setupMarkdown from './markdown'

export function setupPlugins(app: App) {
  setupPinia(app)
  setupTailwindcss()
  setupElementPlus(app)
  setupIconPark(app)
  setupDayjs()
  setupMarkdown(app)
}
