import { Component } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  nums = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  even = this.nums.pipe(
    filter((e) => e % 2 == 0)
  )

  odd = this.nums.pipe(
    filter((e) => e % 2 != 0)
  )

  constructor(){
    console.clear();
    this.even.subscribe(
      (val)=>{
      console.log('even = ', val);
      }
    )

    this.odd.subscribe(
      (val)=>{
      console.log('odd = ', val);
      }
    )
  }
}
