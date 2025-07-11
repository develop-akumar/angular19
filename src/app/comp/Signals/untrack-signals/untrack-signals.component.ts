import { Component, effect, signal, untracked, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-untrack-signals',
  imports: [],
  templateUrl: './untrack-signals.component.html',
  styleUrl: './untrack-signals.component.scss'
})
export class UntrackSignalsComponent {

  constructor() {
    effect(() => {
      console.log('\n counter1() = ', this.counter1());
      // console.log('counter2() = ', this.counter2());

      console.log(`counter 2 = ${untracked(() => this.counter2())}`)
      
    })
  }

  counter1 : WritableSignal<number> = signal(0)
  counter2 : WritableSignal<number> = signal(0)

  update1(){
    this.counter1.update((val) => val + 1)
  }
  update2(){
    this.counter2.update((val) => val + 1)
  }

  
}
