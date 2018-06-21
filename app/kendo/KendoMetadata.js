module.exports = {
    scope: 'papyr',
    name: 'KendoMetadata',
    dependencies: ['polyn { Immutable }'],
    factory: (Immutable) => {
      'use strict'
  
      const IKendoMetadata = new Immutable({
        __blueprintId: 'KendoMetadata',
        firstName: 'string',
        lastName: 'string',
        address: 'string',
        gender: 'string'
      })
  
      return function KendoMetadata (kendoMetadata) {
        kendoMetadata = Object.assign({}, kendoMetadata)
  
        return new IKendoMetadata(kendoMetadata)
      }
    }
  }