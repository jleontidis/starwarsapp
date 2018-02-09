import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@inject(AuthService)
export class Login {     
  constructor(authService){
      
    this.authService = authService;
    this.password = '';
    this.username = '';
    this.errorMessage = '';
}

login(){
    return this.authService.login(this.username, this.password)
    .then(response=>{
        console.log("success -  logged in ");
    })
    .catch(err=>{
        err.json().then(err => this.errorMessage = err.error)
    });

};

logout() {
    return this.authService.logout();
  }
}