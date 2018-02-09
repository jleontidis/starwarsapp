import { bindable, inject } from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@inject(AuthService)
export class Navbar {     

  @bindable router = null;
  
    constructor(auth){
      this.auth = auth;
      this._isAuthenticated = this.auth.isAuthenticated();
      
  }

  get isAuthenticated() {
      return this.auth.isAuthenticated();
  }
}