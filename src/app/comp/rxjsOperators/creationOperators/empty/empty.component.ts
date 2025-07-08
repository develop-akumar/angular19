import { Component } from '@angular/core';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'app-empty',
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent {
  constructor() {
    console.clear();
    let obs$ = of(1, 2, 3, 4)

    obs$.subscribe({
      next(val) {
        console.log('val = ', val)
      },
      complete() {
        console.log('complete of ');
      }
    }
    )

    EMPTY.subscribe({
      next: () => console.log("next"),
      complete: () => console.log("complete")
    }
    )
  }
}
