import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    // AuthService,
  ],
})
/*
the AuthService was already provided in root but also provided in here. That was less
  performant because then 2 instances of the service would be created and the constructor method 
  of that service was called twice. 
  Which would make it less performant and cause bugs while trying to login.
*/
export class AppComponent {}
