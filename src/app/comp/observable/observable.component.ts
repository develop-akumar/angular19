import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {

  observable = new Observable((observer) => {
    let count = 0;
    let interval = setInterval(() => {
      observer.next(++count)
    }, 1000);

    // cleanup function
    return () => {
      // clearInterval(interval)
      // console.log('interval cleared = ',);
    }
  })

  constructor() {
    let obs = this.observable.subscribe({     // subscribing
      next(value){console.log('value = ', value);}
    })

    setTimeout(() => {
      obs.unsubscribe()   // unsubscribing
    }, 5000);



  }

}
