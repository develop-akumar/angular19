import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent {

  obs = interval(1000)
  constructor() {
    console.clear();
    const subs = this.obs.subscribe((val) => {
      console.log('interval = ', val);
    })

    setTimeout(()=>{
    subs.unsubscribe()    // we need to unsubscribe, unless it will run infinitely
    }, 5000)


    


  }
}
