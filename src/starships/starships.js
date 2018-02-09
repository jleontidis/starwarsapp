import { ApiService } from '../api-service';
import { inject, bindable } from 'aurelia-framework'; 

@inject(ApiService)
export class Starships {     
  @bindable starships;
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
        "model",
        "cost_in_credits",
        "crew",
        "birth_year",
        "starship_class"
      ]
    };
  }

  getID(url){
    
    return url.substr(url.lastIndexOf('starships/') + 10).split('/')[0];
  }
}