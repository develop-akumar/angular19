import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-from',
  imports: [],
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss'
})
export class FromComponent {
  number = 1
  obs$: Observable<any> = from([1, 2, 3])

  // Promise
  // obs$: Observable<any> = from(new Promise((resolve)=>{
  // resolve(4)
  // }))

  m$ = new Map()

  constructor() {
    this.obs$.subscribe((res) => {
      console.log('from res = ', res);
    })


    this.m$.set(1, "Hello")
    this.m$.set(2, "Converting no into Observable")

    const mapObs = from(this.m$)
    mapObs.subscribe((res) => {
      console.log('res = ', res);
    })


  }

}
