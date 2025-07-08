import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  imports: [
    CommonModule
  ],
  templateUrl: './fromevent.component.html',
  styleUrl: './fromevent.component.scss'
})
export class FromeventComponent {

  obs!: Observable<{ x: number, y: number }>

  constructor() {
    this.obs = fromEvent<MouseEvent>(window, "mousemove")
      .pipe(
        map((e) => ({ x: e.clientX, y: e.clientY }))
      )

      // this.obs.subscribe((val)=>{
      //   console.log('val = ', val);
      
      // })

  }

}
