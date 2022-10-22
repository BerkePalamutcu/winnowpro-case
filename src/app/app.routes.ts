import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './dashboard/data/data.component';
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'cards',
        component: CardsComponent,
      },
      {
        path: 'data',
        component: DataComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[LoginGuard]
  },
];
