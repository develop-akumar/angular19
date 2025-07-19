import { CanMatchFn } from '@angular/router';

export const loadAdminGuard: CanMatchFn = (route, segments) => {
  return true;
};
