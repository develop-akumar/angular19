import { Component, linkedSignal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss'
})
export class LinkedSignalComponent {

  signal: WritableSignal<number> = signal<number>(10)

  linkedSig = linkedSignal(() => this.signal() * 3)

  // linkedSig:WritableSignal<number> = linkedSignal({
  //   source : this.signal,
  //   computation : ()=>this.signal() * 3
  // })

  // manually altering value of linked signal
  updatelinkedSignal() {
    this.linkedSig.update(() => 300)
  }

  setLinkedSignal() {
    this.linkedSig.set(40)
  }

  updateSimpleSignal(){
    this.signal.set(this.signal() + 1)
  }

}
