import { ApiService } from '../api-service';
import { inject } from 'aurelia-framework'; 

@inject(ApiService)
export class PlanetDetail {     

  constructor(api) {
    this.api = api;
  }

  activate(params, routeConfig){
    this.routeConfig = routeConfig;
    this.api.requestItem(params.id, 'planets')
    .then( data => {
   
      this.planet = this.api.planets.data;   

      if(this.planet.residents.length > 0){
        
        this.api.fetchAttachedUrls(this.planet.residents)
        .then(res => this.planets = res)
        .catch(err => console.log(err));
      }  

      if(this.planet.films.length > 0) {

        this.api.fetchAttachedUrls(this.planet.films)
        .then(res => this.films = res)
        .catch(err => console.log(err));
      }
     
    })
    .catch(err => console.log(err));
  }
}