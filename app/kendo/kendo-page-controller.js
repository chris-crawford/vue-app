module.exports = {
  scope: 'papyr',
  name: 'kendo-page-controller',
  dependencies: ['page', 'content-vue'],
  factory: (page, content) => {
    'use strict'

    const registerRoutes = () => {
      page('/kendo', () => {
        content.component = 'kendo-page'
      })
    }

    return Object.freeze({ registerRoutes })
  }
}