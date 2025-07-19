import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { NoPreloading, PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CustomPreLoadingStrategy } from './preloadingStrategy/customPreLoadingStrategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(
      // PreloadAllModules,
      // NoPreloading,
      CustomPreLoadingStrategy
    )  ),
    // This is used to make HTTP requests
    // It is necessary for making API calls in the application
    provideHttpClient(),
    // This is used to replay events in the browser for client-side hydration
    provideClientHydration(withEventReplay())
  ]
};
