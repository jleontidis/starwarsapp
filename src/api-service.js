import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class ApiService {

  constructor(httpClient) {
    this.baseUrl = 'https://swapi.co/api/';
    this.httpClient = httpClient;
  }

  getResources(){

    return this.httpClient.fetch(this.baseUrl)
       .then( response => response.json())
       .catch(err => console.log(err));
   }
   
  requestItem(id, resourceType){

    var url = this.baseUrl + resourceType + '/' + id + '/';

    return this.fetchItem(url, resourceType);
  
  }

  fetchItem(url, resourceType){

    return this.httpClient.fetch(url)
    .then(response => response.json())
    .then(result => { this[resourceType] = { type: resourceType, data: result } } )
    .catch(error => console.log(error));
  }

  fetchAttachedUrls(endpointArray){
    
    if(endpointArray instanceof Array){
      return Promise.all(endpointArray.map(url => {
        return this.httpClient.fetch(url).then(res => res.json())
        .then(res => { return {url: url, data: res}})
        .catch(err => console.log(err));
        }));
    } else {

      return this.httpClient.fetch(endpointArray).then(res => res.json());
    }
    
  }
  
}