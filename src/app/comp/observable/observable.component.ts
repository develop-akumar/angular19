import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observable',
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit {

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
      next(value) { console.log('value = ', value); }
    })

    setTimeout(() => {
      obs.unsubscribe()   // unsubscribing
    }, 5000);
  }


  asyncObservable$: Observable<number> = new Observable((observer) => {
    let count: number = 0
    setInterval(() => {
      observer.next(++count)
      if (count == 5) {
        observer.complete()
      }
    }, 1000);
  })


  ngForObs$: Observable<number[]> = new Observable<number[]>(
    (observer: Observer<number[]>) => {
      let arr: number[] = []
      let count: number = 0

      let interval = setInterval(() => {
        arr.push(++count)
        observer.next(arr)

        if (count >= 5) {
          clearInterval(interval)
        }
      }, 1000);

    })

  ngOnInit(): void {

    let obs$ = new Observable((observer) => {
      observer.next(1)
      observer.error("Some error occurred")
      console.log(2)
      observer.complete()
      console.log(3)
    }).subscribe({

      next(value) { console.log(value) },
      error(e) { console.log(e) },
      complete() { console.log("complete") }
    }
    )

  }
}
