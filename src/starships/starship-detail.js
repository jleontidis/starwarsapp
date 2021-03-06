import { ApiService } from '../api-service';
import { inject } from 'aurelia-framework'; 

@inject(ApiService)
export class StarshipDetail {     
  constructor(api) {
    this.api = api;
  }

  activate(params, routeConfig){
    this.routeConfig = routeConfig;
    this.api.requestItem(params.id, 'starships')
    .then( data => {
   
      this.starship = this.api.starships.data;   

      if(this.starship.pilots.length > 0){
        
        this.api.fetchAttachedUrls(this.starship.pilots)
        .then(res => this.people = res)
        .catch(err => console.log(err));
      }  

      if(this.starship.films.length > 0) {

        this.api.fetchAttachedUrls(this.starship.films)
        .then(res => this.films = res)
        .catch(err => console.log(err));
      }
     
    })
    .catch(err => console.log(err));
  }
}