module.exports = {
	scope: 'papyr',
	name: 'kendo-page-component',
	dependencies: ['Vue'],
	factory: (Vue) => {
		'use strict'

		const state = {
			heading: 'Kendo-UI Examples with Vue.js',
			body: 'The following are various examples of integrating Kendo-UI with vue.js.',
			count: 0,
			calendarMetadata: {
				selectedDate: new Date(),
				currentView: ''
			}
		}

		// kendo manipulation methods
		const incrementCount = () => {
			state.count = state.count + 1;
		}
		const onNavigate = (e) => {
			var view = e.sender.view();
			state.calendarMetadata.currentView = view.name;
		}
		const onDateChange = (e) => {
			state.calendarMetadata.selectedDate = e.sender.current();
		}

		const component = Vue.component('kendo-page', {
			template: `
				<div class="component kendo-page-component">
					<h1>{{heading}}</h1>
					<div>{{body}}</div>
		
					<div class="container">
						<div class="element-container">
							<h2>Kendo Calendar</h2>
							<kendo-calendar class="kendo-calendar" v-on:change="onDateChange" v-on:navigate="onNavigate" :value="new Date()" ></kendo-calendar>
							<div>Calendar View Name: {{calendarMetadata.currentView}}</div>
							<div>Current Selected Date: {{calendarMetadata.selectedDate}}</div>
						</div>

						<div class="element-container">
							<h2>Kendo Button</h2>
							<kendo-button @click="incrementCount">Click Me!</kendo-button>
							<div>Click Count: {{count}}</div>
						</div>

						<div class="element-container">
							<h2>Kendo Barcode</h2>
							<kendo-barcode :value="2346722"
										:type="'ean8'"
										:width="280"
										:height="100" >
							</kendo-barcode>
						</div>

						<div>
							
						</div>
					</div>

				</div>
			`,
			data: () => state,
			methods: { incrementCount, onNavigate, onDateChange }
		})

		return Object.freeze({ name: 'kendo-page', component })
	}
}