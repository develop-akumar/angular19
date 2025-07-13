import { Component, effect, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-convt-obs-to-signal',
  imports: [],
  templateUrl: './convt-obs-to-signal.component.html',
  styleUrl: './convt-obs-to-signal.component.scss'
})
export class ConvtObsToSignalComponent {

  obs$: Observable<number> = interval(1000).pipe(
    map(() => Math.floor(Math.random() * 10)),
    take(5)
  )

  // Math.floor(Math.random() * 100)

  // obs$: Observable<number> = interval(1000).pipe(
  //   // map((val) => val),
  //   take(5)
  // )

  randomNumber: Signal<number> = toSignal(this.obs$, { initialValue: 0 })

  constructor() {
    effect(() => {
      console.log('this.randomNumber = ', this.randomNumber());
    })
  }

}
