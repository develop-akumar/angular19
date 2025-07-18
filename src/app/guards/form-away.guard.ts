import { CanDeactivateFn } from '@angular/router';
import { AboutComponent } from '../comp/about/about.component';

export const formAwayGuard: CanDeactivateFn<AboutComponent> = (
  component, 
  currentRoute, 
  currentState, 
  nextState
) => {
  console.log('[formAwayGuard] = ', );
  console.log('component.movingStatus = ', component.movingStatus);
  console.log('currentRoute = ', currentRoute);
  console.log('currentState = ', currentState);
  console.log('nextState = ', nextState);
  // if(component.movingStatus){
  //   return true
  // }
  return true;
};
