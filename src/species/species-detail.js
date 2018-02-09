import { ApiService } from '../api-service';
import { inject } from 'aurelia-framework'; 

@inject(ApiService)
export class SpeciesDetail {     
  constructor(api) {
    this.api = api;
  }

  activate(params, routeConfig){
    this.routeConfig = routeConfig;
    this.api.requestItem(params.id, 'species')
    .then( data => {
   
      this.race = this.api.species.data;   

      if(this.race.people.length > 0){
        
        this.api.fetchAttachedUrls(this.race.people)
        .then(res => this.people = res)
        .catch(err => console.log(err));
      }  

      if(this.race.films.length > 0) {

        this.api.fetchAttachedUrls(this.race.films)
        .then(res => this.films = res)
        .catch(err => console.log(err));
      }
     
      if(this.race.homeworld.length > 0) {

        this.api.fetchAttachedUrls(this.race.homeworld)
        .then(res => this.planets = res)
        .catch(err => console.log(err));
      }

    })
    .catch(err => console.log(err));
  }
}