import {ApiService} from '../api-service';
import {inject} from 'aurelia-framework';

@inject(ApiService)
export class Homepage {
  
  data
  constructor(api){
    this.api = api;
  }

  created() {
    this.api.getResources();
    this.data = this.api.apiData;
  }

}