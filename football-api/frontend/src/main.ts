import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { APP_ROUTES } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    APP_ROUTES,
    provideHttpClient(),
    // Otros providers si hacés inyecciones (como AuthService o guards)
  ]
});
