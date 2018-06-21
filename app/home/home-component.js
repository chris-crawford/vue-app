module.exports = {
  scope: 'papyr',
  name: 'home-component',
  dependencies: ['Vue', 'kendo'],
  factory: (Vue, kendo) => {
    'use strict'

    const state = {
      heading: 'Welcome to Papyr!',
      body: 'To get started, you can search for books. Try "adams", "wild", "robbins", "swamp", "india", "tropper", "di", "world", or "novel". If nothing returns, make sure you ran `npm run seed`.'
    }

    const component = Vue.component('home', {
      template: `
        <div class="component home-component">
          <h1>{{heading}}</h1>
          <div>{{body}}</div>
          <kendo-calendar :value="new Date()" ></kendo-calendar>
        </div>
      `,
      data: () => state
    })

    return Object.freeze({ name: 'home', component })
  }
}