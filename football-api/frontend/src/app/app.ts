import { Component, signal } from '@angular/core';
import { PlayerComponent } from './components/player/player';
import { LoginComponent } from './components/login/login';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlayerComponent,
    LoginComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
}

