module.exports = {
    scope: 'papyr',
    name: 'people-controller',
    dependencies: ['page', 'query-string', 'content-vue', 'people-component', 'people-repository'],
    factory: (page, queryString, content, peopleComponent, peopleRepo) => {
      'use strict'
  
      const registerRoutes = () => {
        page('/peoples/:id', (context) => {
          peopleRepo.getById(context.params.id)
            .then((person) => {
              peopleComponent.setPeople(person);
              content.component = 'people'
            })
            .catch((err) => {
              console.log(err)
              content.component = 'home'
            })
        })

        page('/people', (context) => {
          peopleRepo.get()
            .then((people) => {
              peopleComponent.setPeople(people);
              content.component = 'people';
            })
        });
      }
  
      return Object.freeze({ registerRoutes })
    }
  }