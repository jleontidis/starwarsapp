import { ApiService } from '../api-service';
import { inject, bindable } from 'aurelia-framework'; 

@inject(ApiService)
export class Vehicles {     
  @bindable vehicles;
  @bindable criteria;

  constructor(api){
    this.api = api;

    this.options =  {
      shouldshort: true,
      threshold: 0.25,
      location: 0,
      distance: 10,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys : [
        "name",
        "model",
        "cost_in_credits",
        "crew",
        "passengers",
        "vehicle_class"
      ]
    };
  }

  getID(url){
    
    return url.substr(url.lastIndexOf('vehicles/') + 9).split('/')[0];
  }
}