import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  /*There is no need to call auth method here 
  as the guard is already checking it for us */
  ngOnInit(): void {}
}
