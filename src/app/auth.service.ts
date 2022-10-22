import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, first, tap, timer } from 'rxjs';

const withDelay$ = (due: number) => timer(due).pipe(first());

@Injectable({
  providedIn: 'root',
  //This service was both provided in and in the app.component.ts
  //go to app.component.ts for explanation.
})
export class AuthService {
  constructor() {
    this.isLoggedIn$$.next(this.getLoggedInFromSession());
  }

  // if already logged in then constructor will set the value to true otherwise it's initialized as false
  public readonly isLoggedIn$$ = new BehaviorSubject<boolean>(false);
  readonly isLoggedIn$ = this.isLoggedIn$$.asObservable();

  private router = inject(Router);

  login(): void {
    withDelay$(1000)
      .pipe(
        tap(() => {
          this.isLoggedIn$$.next(true);
          this.addSessionLoggedIn();
        })
      )
      .subscribe(() => this.router.navigateByUrl('/dashboard/home'));
  }

  logout(): void {
    withDelay$(1000)
      .pipe(
        tap(() => {
          this.isLoggedIn$$.next(false);
          this.endSession();
        })
      )
      .subscribe(() => this.router.navigateByUrl('/login'));
  }
  //I use sessionStorage to keep track of user's login status
  addSessionLoggedIn(): void {
    sessionStorage.setItem('login', 'true');
  }

  getLoggedInFromSession(): boolean {
    return JSON.parse(sessionStorage.getItem('login') || 'false');
  }

  endSession(): void {
    sessionStorage.removeItem('login');
  }
}
