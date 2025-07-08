import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-of',
  imports: [
    CommonModule

  ],
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss'
})
export class OfComponent {
  number = 5
  // obs$: Observable<any> = of(1, 2, 3, 4, 5, 6, {name:"Arvind"}, [6,7,8,9])
  obs$: Observable<any> = of(this.number)

  constructor() {
    // this.obs$ = of(1, 2, 3, 4, 5, 6)

    this.obs$.subscribe(
      (val) => {
        console.log('of val = ', val);
      }
    )
  }



}
