module.exports = {
    scope: 'papyr',
    name: 'people-repository',
    dependencies: ['configuration-wrapper'],
    factory: (configurationWrapper) => {
      'use strict'
  
      // const find = (query) => {
      //   return getPeople(configurationWrapper.config.baseUrl)
      //     .then((people) => {
      //       return people.filter((people) => {
      //         const q = query.toLowerCase()
      //         const peopleText = JSON.stringify(people).toLowerCase()

      //         return peopleText.indexOf(q) > -1
      //       })
      //     });
      // }

      const get = () => {
        return getPeople(configurationWrapper.config.baseUrl)
      }

      const getById = (id) => {
        // return getPeople()
        //   .then((people) => {
        //     return people.filter((people) =>
        //       people.id ===  id
        //     )
        //   }).then((people) => {
        //     if (people.length) {
        //       return people[0]
        //     }
  
        //     throw new Error(`Person with id, ${id} not found`)
        //   })
        return getPeopleById(id);
      }
  
      return Object.freeze({ get, getById })
    }
  }
  
  function getPeople (baseUrl) {
    var endpoint = baseUrl + '/api/people';
    return fetch(endpoint)
        .then(response => response.json())
        .catch((err) => {
          console.log(err)
        })
  }

  function getPeopleById(baseUrl, id) {
    var endpoint = baseUrl + '/api/people/' + id;
    return fetch(endpoint)
        .then(response => response.json())
        .catch((err) => {
          console.log(err)
        })
  }