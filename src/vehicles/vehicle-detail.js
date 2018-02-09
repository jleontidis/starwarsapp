import { ApiService } from '../api-service';
import { inject } from 'aurelia-framework'; 

@inject(ApiService)
export class VehicleDetail {     
  constructor(api) {
    this.api = api;
    this.films = [];
  }

  activate(params, routeConfig){
    this.routeConfig = routeConfig;
    this.api.requestItem(params.id, 'vehicles')
    .then( data => {
   
      this.vehicle = this.api.vehicles.data;   

      if(this.vehicle.films.length > 0){
       
        this.api.fetchAttachedUrls(this.vehicle.films, 'films')
        .then(res => this.films = res);
      }
      
      if(this.vehicle.pilots.length > 0) {
        this.api.fetchAttachedUrls(this.vehicle.pilots, 'people')
        .then(res => this.people = res);
      }

    }).catch(err => console.log(err));
  }
}