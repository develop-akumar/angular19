import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const childRouteGuard: CanActivateChildFn = (childRoute, state) => {
console.log('[childRouteGuard]  ' );
  // const router = inject(Router)
  // router.navigate(["/about"])
  return true;
};
