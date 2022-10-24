import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  /*ChangeDetectionStrategy onpush added here so that the parent components 
    when the user enters information on the inputs the parent components won't
    be rerendered and it will be more performant.
  */
})
export class LoginComponent{
  private authService = inject(AuthService);
  private loginService = inject(LoginService);

  userName: string = 'admin';
  password: string = 'admin';

  /*
    instead of checking the login in every component,
    guard and login services handle that logic. By doing this way,
    the only purpose of the component is showing the UI and
    login logic is separeted from the components
  */

  login(userName: string, password: string) {
    this.loginService.makeLoginRequest(userName, password) ? 
      this.authService.login() : null
  }
}
