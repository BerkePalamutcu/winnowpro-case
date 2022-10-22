import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);


  /*This guard's purpose is if the user is logged in it will
  prevent him going to the login page.
  */
  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isLoggedIn$.pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigateByUrl('/dashboard/home');
        }
        return isLoggedIn ? false : true;
      })
    );
  }
}
