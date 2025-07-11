import { Component, signal, Signal, computed, WritableSignal, effect } from '@angular/core';

@Component({
  selector: 'app-effect-signals',
  imports: [],
  templateUrl: './effect-signals.component.html',
  styleUrl: './effect-signals.component.scss'
})
export class EffectSignalsComponent {

  eff = effect((onCleanup) => {
    console.log('signal() = ', this.signal())
    console.log('signal2() = ', this.signal2())

    onCleanup(() => {
      console.log('Effect cleanup called');
    });
  })

  constructor() {
    // effect(() => {
    //   console.log('signal() = ', this.signal())
    //   console.log('signal2() = ', this.signal2())
    // })
  }

  signal: WritableSignal<number> = signal<number>(10)
  signal2: WritableSignal<number> = signal<number>(50)

  update() {
    this.signal.update((val) => val + 1)
  }

  update2() {
    this.signal2.update((val) => val + 1)
  }




}
