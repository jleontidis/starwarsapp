import { ApiService } from '../api-service';
import { inject, bindable } from 'aurelia-framework'; 

@inject(ApiService)
export class People {    

  @bindable people;
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
        "height",
        "gender",
        "mass",
        "birth_year",
        "skin_color"
      ]
    }
   
  }

  getID(url){
    
    return url.substr(url.lastIndexOf('people/') + 7).split('/')[0];
  }
}
