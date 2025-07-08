import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {

  constructor() {
    let abc = timer(2000, 1000).subscribe((val) => {
      console.log('val = ', val);
    })

    setTimeout(() => {
      abc.unsubscribe()
    }, 5000);
  }

}
