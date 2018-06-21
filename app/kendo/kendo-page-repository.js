module.exports = {
    scope: 'papyr',
    name: 'kendo-page-repository',
    dependencies: ['KendoMetadata'],
    factory: (KendoMetadata) => {
      'use strict'
  
      const find = (query) => {
        return getKendoMetadata()
      }
  
      return Object.freeze({ find })
    }
  }
  
  function getKendoMetadata () {
    return fetch('https://localhost:44345/api/kendo')
        .then(response => response.json())
  }