import { ApiService } from '../api-service';
import { inject } from 'aurelia-framework'; 

@inject(ApiService)
export class Films {     

  constructor(api){
    this.api = api;
    this.film = this.api.film;
    
  }

}