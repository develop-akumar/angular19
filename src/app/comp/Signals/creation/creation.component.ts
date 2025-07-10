import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-creation',
  imports: [],
  templateUrl: './creation.component.html',
  styleUrl: './creation.component.scss'
})
export class CreationComponent {

  mySignal = signal<number>(0)

  constructor() {
    console.clear();

  }

  increment() {
    this.mySignal.set(this.mySignal() + 1)
  }

  update() {
    this.mySignal.update(
      (val) =>
        val * 2
    )
  }

}
