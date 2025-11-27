import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
}).then(() => {
  setTimeout(() => {
    const AOS = (window as any).AOS;
    if (AOS) {
      AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, 100);
});
