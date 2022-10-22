import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  /*service to check login. If these conditions are met 
  authService's login method is called in the component*/
  makeLoginRequest(userName: string, password: string): boolean {
    //assuming that it's not going to be undefined
    if (userName! === 'admin' && password! === 'admin') {
      return true;
    } else if (userName === '' || password === '') {
      alert("username or password can't be blank");
      return false;
    } else {
      alert('wrong username or password');
      return false;
    }
  }
}
