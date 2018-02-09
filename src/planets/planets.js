import { ApiService } from '../api-service';
import { inject, bindable } from 'aurelia-framework'; 

@inject(ApiService)
export class Planets {     
  @bindable planets;
  @bindable criteria;

  constructor(api){
    this.api = api;
    this.options =  {
      shouldshort: true,
      threshold: 0.25,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys : [
        "name",
        "climate",
        "population",
        "terrain",
        "surface_water"
      ]
    };
  }

  getID(url){
    
    return url.substr(url.lastIndexOf('planets/') + 8).split('/')[0];
  }
}