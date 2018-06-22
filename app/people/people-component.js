module.exports = {
	scope: 'papyr',
	name: 'people-component',
	dependencies: ['Vue'],
	factory: (Vue) => {
		'use strict'

		const state = {
			heading: 'People',
			body: 'Examples regarding the gateway API for people.',
			people: []
		}

		const setPeople = (people) => {
			state.people = (JSON.parse(people));
		}

		const component = Vue.component('people', {
			template: `
				<div class="component">
					<h1>{{heading}}</h1>
          <div>{{body}}</div>

          <ul>
            <li v-for="person in people">
              {{person.lastName}}, {{person.firstName}}
            </li>
          </ul>
				</div>
			`,
			data: () => state
		})

		return Object.freeze({ name: 'people', component, setPeople })
	}
}