import {ApiService} from '../api-service';
import {inject, bindable} from 'aurelia-framework';

@inject(ApiService)
export class Homepage {
  
  people = { checked: true, data: []};
  starships = { checked: true, data: [] };
  planets = { checked: true, data: [] };
  films = { checked: true, data: [] };
  vehicles = { checked: true, data: [] };
  species = { checked: true, data: [] };

  constructor(api){
    this.api = api;
  }

  created() {
    //get resources from api
    this.api.getResources().then(res => {
      var resourcesArray = [res.people, res.starships, res.planets, res.species, res.vehicles, res.films ];
     
      //get every url retourned and iterate through the pages
      this.api.fetchAttachedUrls(resourcesArray).then(res => {
           for(var item in res){

             let pages = Math.ceil(res[item].data.count/10);
            
             if (res[item].url.includes('people')) {
              this.people.data = this.people.data.concat(res[item].data.results);
              for(var i = 2; i <= pages; i++){
            
                this.api.fetchAttachedUrls(res[item].url + '?page=' + i).then(data =>  {
                    this.people.data = this.people.data.concat(data.results);
                  });
               }
             } else if(res[item].url.includes('vehicles')){  

              this.vehicles.data = this.vehicles.data.concat(res[item].data.results);
              for(var i = 2; i <= pages; i++){
            
                this.api.fetchAttachedUrls(res[item].url + '?page=' + i).then(data =>  {
                    this.vehicles.data = this.vehicles.data.concat(data.results);
                  });
               }


             } else if(res[item].url.includes('starships')){ 
              
              this.starships.data = this.starships.data.concat(res[item].data.results);
              for(var i = 2; i <= pages; i++){
            
                this.api.fetchAttachedUrls(res[item].url + '?page=' + i).then(data =>  {
                    this.starships.data = this.starships.data.concat(data.results);
                  });
               }
             } else if(res[item].url.includes('planets')){ 

              this.planets.data = this.planets.data.concat(res[item].data.results);
              for(var i = 2; i <= pages; i++){
            
                this.api.fetchAttachedUrls(res[item].url + '?page=' + i).then(data =>  {
                    this.planets.data = this.planets.data.concat(data.results);
                  });
               }
             } else if(res[item].url.includes('species')){ 

              this.species.data = this.species.data.concat(res[item].data.results);
              for(var i = 2; i <= pages; i++){
            
                this.api.fetchAttachedUrls(res[item].url + '?page=' + i).then(data =>  {
                    this.species.data = this.species.data.concat(data.results);
                  });
               }

             } else if(res[item].url.includes('films')){ 
                           
             this.films.data = this.films.data.concat(res[item].data.results);
             console.log(pages);
             for(var i = 2; i <= pages; i++){
           
               this.api.fetchAttachedUrls(res[item].url + '?page=' + i).then(data =>  {
                   this.films.data = this.films.data.concat(data.results);
                 });
              }
             }
           }
        });   
   });
    
    
  }

}