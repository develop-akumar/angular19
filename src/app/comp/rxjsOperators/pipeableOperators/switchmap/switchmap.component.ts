import { Component } from '@angular/core';
import { interval, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-switchmap',
  imports: [],
  templateUrl: './switchmap.component.html',
  styleUrl: './switchmap.component.scss'
})
export class SwitchmapComponent {

  source$ = of(1, 2, 3)

  constructor() {
    this.source$.pipe(
      switchMap((val) => {
        console.log('\n\n source val = ', val);
        console.log('%c switch Map() ------starts', 'background: #222; color: #bada55');
        return interval(1000).pipe(take(3))
      })
    ).subscribe((val) => {
      console.log('reading = ', val);
    })
  }

}
