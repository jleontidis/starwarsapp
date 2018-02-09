export class App {

  configureRouter(config, router) {
    this.router = router;

    config.title = 'Star Wars Fan App';
    config.map([
      { route:'', moduleId:'./home/login', name:'login', nav: true, title: 'Log In' },
      { route: 'home', moduleId: './home/homepage', name: 'home', nav: true, title: 'Home'},
      { route: 'people', moduleId: './people/people', name: 'people', nav: true, title: 'People'},
      { route: 'people/:id', moduleId: './people/person-detail', name: 'person-detail',  title: 'Person details'},
      { route: 'planets', moduleId: './planets/planets', name: 'planets', nav: true, title: 'Planets'},
      { route: 'planets/:id', moduleId: './planets/planet-detail', name: 'planet-detail',  title: 'Planet details'},
      { route: 'films', moduleId: './films/films', name: 'films', nav: true, title: 'Films'},
      { route: 'films/:id', moduleId: './films/film-detail', name: 'film-detail',  title: 'Film details'},
      { route: 'species', moduleId: './species/species', name: 'species', nav: true, title: 'Species'},
      { route: 'species/:id', moduleId: './species/species-detail', name: 'species-detail',  title: 'Race details'},
      { route: 'vehicles', moduleId: './vehicles/vehicles', name: 'vehicles', nav: true, title: 'Vehicles'},
      { route: 'vehicles/:id', moduleId: './vehicles/vehicle-detail', name: 'vehicle-detail',  title: 'Vehicle details'},
      { route: 'starships', moduleId: './starships/starships', name: 'starships', nav: true, title: 'Starships'},
      { route: 'starships/:id', moduleId: './starships/starship-detail', name: 'starship-detail',  title: 'Starship details'}
    ]);
  }
}
