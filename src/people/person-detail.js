import { ApiService } from '../api-service';
import { inject } from 'aurelia-framework'; 

@inject(ApiService)
export class PersonDetail {     


  constructor(api) {
    this.api = api;
  }


  activate(params, routeConfig){
    this.routeConfig = routeConfig;
    this.api.requestItem(params.id, 'people')
    .then( data => {
   
      this.person = this.api.people.data;   

      if(this.person.homeworld.length > 0){
        
        this.api.fetchAttachedUrls(this.person.homeworld)
        .then(res => this.planets = res)
        .catch(err => console.log(err));
      }  

      if(this.person.films.length > 0) {

        this.api.fetchAttachedUrls(this.person.films)
        .then(res => this.films = res)
        .catch(err => console.log(err));
      }

      if(this.person.starships.length > 0) {

        this.api.fetchAttachedUrls(this.person.starships)
        .then(res => this.starships = res)
        .catch(err => console.log(err));
      }

      if(this.person.vehicles.length > 0) {

        this.api.fetchAttachedUrls(this.person.vehicles)
        .then(res => this.vehicles = res)
        .catch(err => console.log(err));
      }

      if(this.person.species.length > 0) {

        this.api.fetchAttachedUrls(this.person.species)
        .then(res => this.species = res[0].data)
        .catch(err => console.log(err));
      }
      
    })
    .catch(err => console.log(err));
  }

}
