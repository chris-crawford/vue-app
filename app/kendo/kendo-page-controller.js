module.exports = {
  scope: 'papyr',
  name: 'kendo-page-controller',
  dependencies: ['page', 'query-string', 'content-vue', 'kendo-page-component', 'kendo-page-repository'],
  factory: (page, queryString, content, kendoPageComponent, kendoRepo) => {
    'use strict'

    const registerRoutes = () => {
      page('/kendo', (context) => {
        const qs = queryString.parse(context.queryString);
        kendoRepo.find(qs.q)
          .then((kendoMetadata) => {
            kendoPageComponent.setKendoMetadata(kendoMetadata);
            content.component = 'kendo-page';
          })
      })
    }

    return Object.freeze({ registerRoutes })
  }
}