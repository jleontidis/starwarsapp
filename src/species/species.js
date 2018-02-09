import { ApiService } from '../api-service';
import { inject, bindable } from 'aurelia-framework'; 

@inject(ApiService)
export class Species {     
  @bindable species;
  @bindable criteria;
  //@bindable options;

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
        "designation",
        "terrain",
        "mass",
        "birth_year",
        "classification"
      ]
    };
  }

  getID(url){
    
    return url.substr(url.lastIndexOf('species/') + 8).split('/')[0];
  }
}