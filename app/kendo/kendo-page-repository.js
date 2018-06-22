module.exports = {
    scope: 'papyr',
    name: 'kendo-page-repository',
    dependencies: ['KendoMetadata', 'configuration-wrapper'],
    factory: (KendoMetadata, configurationWrapper) => {
      'use strict'
  
      const find = (query) => {
        return getKendoMetadata(configurationWrapper.config.baseUrl)
      }
  
      return Object.freeze({ find })
    }
  }
  
  function getKendoMetadata (baseUrl) {
    var endpoint = baseUrl + '/api/kendo';
    return fetch(endpoint)
        .then(response => response.json())
  }