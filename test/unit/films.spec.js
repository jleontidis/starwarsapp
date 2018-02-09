import {StageComponent} from 'aurelia-testing';
//import {HttpClient} from 'aurelia-fetch-client';
import {ApiService} from '../../src/api-service';
import {bootstrap} from 'aurelia-bootstrapper';
import {Films} from '../../src/films/films';
import {FakeApi} from '../../src/fakeApi';
export class MockService {
    constructor(title){
        this.title = title;
    }

    getTitle() { return Promise.resolve(this.title) }
}
describe('Film component test', () => {

    let component;
    let api = new ApiService();

    beforeEach( () => {


        component = StageComponent.withResources('films/films').inView('<films></films>');

        component.bootstrap( aurelia => {
            aurelia.use.standardConfiguration();

            aurelia.container.registerInstance(ApiService, api.films[0]);
        });//component

    }); //before-each

    it('should render title', done => {
        // api.title = 'Title';
        component.create(bootstrap)
        .then(() => {
            const nameElement = document.querySelector('.card-header h2');
            console.log('Promise: ' + nameElement.innerHTML);
            done();
        })
        .catch(err => console.log('Error: ' + err));
        
    });

    afterEach(() => {
        //component.dispose();
    });
});

describe('Film Component', () => {
      let component;
      let api;

      beforeEach(() => {
        api = new FakeApi();
        component = StageComponent
        .withResources('films/films')
        .inView('<films></films>');

        component.bootstrap(aurelia => {
            aurelia.use
              .standardConfiguration();
      
            aurelia.container.registerInstance(FakeApi, api.film);
          });

      });

      it('should render film title', done => {
    
         component.create(bootstrap).then(() => {
           const nameElement = document.querySelector('.card-header h2');
           console.log(nameElement);
           expect(nameElement.innerHTML).toBe(api.film.title);
           done();
         }).catch(e => { console.log(e.toString()) });
      });

      // it('should render film director', done => {
        
      //   component.create(bootstrap).then(() => {
      //     const nameElement = document.querySelector('.films-list li:first-child span');
      //     expect(nameElement.innerHTML).toBe('Film director');
      //     done();
      //   }).catch(e => { console.log(e.toString()) });
      // });

      // it('should render film release date', done => {

      //   component.create(bootstrap).then(() => {
      //     const nameElement = document.querySelector('.films-list li:nth-child(2) span');
      //     expect(nameElement.innerHTML).toBe('Film release date');
      //     done();
      //   }).catch(e => { console.log(e.toString()) });
      // });

      // it('should render film description', done => {

      //   component.create(bootstrap).then(() => {
      //     const nameElement = document.querySelector('.card-body p');
      //     expect(nameElement.innerHTML).toBe('Film description');
      //     done();
      //   }).catch(e => { console.log(e.toString()) });
      // });

      afterEach(() => {
        //component.dispose();
      });
    });
