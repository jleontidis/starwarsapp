import {ApiService} from '../api-service';
import {inject, bindable} from 'aurelia-framework';

@inject(ApiService)
export class Homepage {
  
  people = { checked: true, criteria: '' };
  starships = { checked: true };
  planets = { checked: true };
  films = { checked: true };
  vehicles = { checked: true };
  species = { checked: true };
  totalCount = 0;

  constructor(api){
    this.api = api;
  }

  created() {
    this.api.getResources().then(res => {
      var resourcesArray = [res.people, res.starships, res.planets, res.species, res.vehicles, res.films ];
      this.api.fetchAttachedUrls(resourcesArray).then(res => {
            for(var obj in res) {

              if( res[obj].next === null){
                this.films.data = res[obj].results;
              }else {
            
                if(res[obj].next.includes('people')){
                  this.people.data = res[obj].results;
                  this.people.next = res[obj].next;
            
                } else if(res[obj].next.includes('vehicles')){
                  this.vehicles.data = res[obj].results;
                  this.vehicles.next = res[obj].next;
                } else if(res[obj].next.includes('starships')){
                  this.starships.data = res[obj].results;
                  this.starships.next = obj.next;
                } else if(res[obj].next.includes('planets')){
                  this.planets.data = res[obj].results;
                  this.planets.next = res[obj].next;
                } else if(res[obj].next.includes('species')){
                  this.species.data = res[obj].results;
                  this.species.next = res[obj].next;
                } 
              }
            }
            this.totalCount = this.people.data.length + this.species.data.length +this.films.data.length +this.starships.data.length + this.vehicles.data.length +this.planets.data.length;
        });
    });
  }
}