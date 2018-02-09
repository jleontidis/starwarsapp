import { ApiService } from '../api-service';
import { inject, bindable } from 'aurelia-framework'; 

@inject(ApiService)
export class Films {     
  @bindable films;
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
        "title",
        "director",
        "release_date"
      ]
    };
  }

  getID(url){
    
    return url.substr(url.lastIndexOf('films/') + 6).split('/')[0];
  }
}