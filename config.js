module.exports = {
    scope: 'papyr',
    name: 'configuration-wrapper',
    dependencies: [],
    factory: () => {
        'use strict'

        const config = {
            baseUrl: 'https://localhost:44345'
        };
        
        return Object.freeze({ config });
    }
}