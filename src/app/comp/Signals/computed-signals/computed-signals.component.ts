import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.scss'
})
export class ComputedSignalsComponent {

  signal: WritableSignal<number> = signal<number>(10)
  signal2: WritableSignal<number> = signal<number>(10)

  compSignal: Signal<number> = computed(() => 10 + this.signal() + this.signal2())

  updateSignal() {
    this.signal.update((val) => this.signal() + 1)
  }

  updateSignal2() {
    this.signal2.update((val) => this.signal2() + 1)
  }

}
