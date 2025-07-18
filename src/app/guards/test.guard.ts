import { CanActivateFn } from '@angular/router';

export const testGuard: CanActivateFn = (route, state) => {
  console.log('[testGuard] = ', );
  return true;
};
