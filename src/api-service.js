import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {Person} from './people/person';
import {Film} from './films/film';
import {Planet} from './planets/planet';
import {Starship} from './starships/starship';
import {Vehicle} from './vehicles/vehicle';
import {Race} from './species/race';

@inject(HttpClient)
export class ApiService {
    
  constructor(httpClient) {
    this.baseUrl = 'https://swapi.co/api/';
    this.httpClient = httpClient;
    this.apiData = [];
  }

  getResources(){
     this.makeRequest(this.baseUrl);
  }

  makeRequest(url){
    
  this.httpClient.fetch(url)
    .then(response => response.json())
    .then(resources => this.parseUrls(resources))
    .catch(err => console.log(err));

  }
  
  parseUrls(resources){
      
    let urls = Object.entries(resources);

    Promise.all(urls.map( ([property, url]) =>
      fetch(url).then(response => { 
        return { response: response.json(), type: property } 
      })
      .then(data => { this.checkTypes(data) } )
      .catch(err => console.log(err))
    ));
  }

  checkTypes(data){
    data.response
    .then(d => {

      for(var obj in d.results){
        d.results[obj].type = data.type;
        this.apiData.push(d.results[obj]);
      }
    })
    .catch(err => console.log(err));
  }
}