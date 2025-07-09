import { Component } from '@angular/core';
import { concatMap, Observable, of } from 'rxjs';

@Component({
  selector: 'app-concatmap',
  imports: [],
  templateUrl: './concatmap.component.html',
  styleUrl: './concatmap.component.scss'
})
export class ConcatmapComponent {

  outer: Observable<number> = of(1, 2, 3)
  inner: Observable<string> = of("A", "B", "C")

  constructor() {
    console.clear();
    this.outer
      .pipe(
        concatMap((innerval) => {
          console.log('\n\ninnerval = ', innerval);
          console.log('%c Inner Observable() ------starts', 'background: #222; color: #bada55');
          return this.inner
        })
      )
      .subscribe((val) => {
        console.log('outer val = ', val);
      })

  }

}
