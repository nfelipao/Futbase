import { Routes, provideRouter } from '@angular/router';
import { PlayerComponent } from './components/player/player';
import { LoginComponent } from './components/login/login';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'api/players', component: PlayerComponent, canActivate: [AuthGuard] }
];

export const APP_ROUTES = provideRouter(routes);
