import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {

  constructor() {
    const observable = new Observable((observer) => {
      console.log('observable executed = ',);
      observer.next("Hello")
      observer.error("some error has occurred")
      observer.next("Hello 2")

      setTimeout(() => {
        console.log('settimeout = ', );
        observer.complete()
      }, 2000);
      console.log('Ram = ', );
      
    })
      .subscribe({
        next(value) { console.log('value = ', value)},
        complete() { console.log('Observer is completed.'); },
        error(err) { console.error(err);  },
      })



  }

}
