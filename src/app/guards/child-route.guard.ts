import { CanActivateChildFn } from '@angular/router';

export const childRouteGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
