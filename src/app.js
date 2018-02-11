import {AuthorizeStep} from 'aurelia-auth';
export class App {

  configureRouter(config, router) {
    this.router = router;

    config.title = 'Star Wars Fan App';
    config.addAuthorizeStep(AuthorizeStep);
    config.map([
      { route:'', moduleId:'./home/login', name:'login', nav: true, title: 'Log In', auth: false },
      { route: 'home', moduleId: './home/homepage', name: 'home', nav: true, title: 'Home', auth:true },
      { route: 'logout', moduleId:'./home/logout', name: 'logout', nav: true, auth: true, title: 'Log Out'},
      { route: 'people/:id', moduleId: './people/person-detail', name: 'person-detail',  title: 'Person details', auth:true },
      { route: 'planets/:id', moduleId: './planets/planet-detail', name: 'planet-detail',  title: 'Planet details', auth:true },
      { route: 'films/:id', moduleId: './films/film-detail', name: 'film-detail',  title: 'Film details', auth:true },
      { route: 'species/:id', moduleId: './species/species-detail', name: 'species-detail',  title: 'Race details', auth:true },
      { route: 'vehicles/:id', moduleId: './vehicles/vehicle-detail', name: 'vehicle-detail',  title: 'Vehicle details', auth:true },
      { route: 'starships/:id', moduleId: './starships/starship-detail', name: 'starship-detail',  title: 'Starship details', auth:true }
    ]);
  }
}
