import { ApiService } from '../api-service';
import { inject } from 'aurelia-framework'; 

@inject(ApiService)
export class FilmDetail {     

  constructor(api) {
    this.api = api;
  }


  activate(params, routeConfig){
    this.routeConfig = routeConfig;
    this.api.requestItem(params.id, 'films')
    .then( data => {
   
      this.film = this.api.films.data;   

      if(this.film.planets.length > 0){
        
        this.api.fetchAttachedUrls(this.film.planets).then(res => this.planets = res);
      }  

      if(this.film.characters.length > 0) {

        this.api.fetchAttachedUrls(this.film.characters).then(res => this.people = res);
      }

      if(this.film.starships.length > 0) {

        this.api.fetchAttachedUrls(this.film.starships).then(res => this.starships = res);
      }

      if(this.film.vehicles.length > 0) {

        this.api.fetchAttachedUrls(this.film.vehicles).then(res => this.vehicles = res);
      }

      if(this.film.species.length > 0) {

        this.api.fetchAttachedUrls(this.film.species).then(res => this.species = res);
      }
      
    })
    .catch(err => console.log(err));
  }
}

