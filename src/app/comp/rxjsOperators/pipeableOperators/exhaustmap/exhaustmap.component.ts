import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { of, delay, fromEvent, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-exhaustmap',
  imports: [],
  templateUrl: './exhaustmap.component.html',
  styleUrl: './exhaustmap.component.scss'
})
export class ExhaustmapComponent implements AfterViewInit {

  @ViewChild("myBtn", { static: false }) button!: ElementRef

  ngAfterViewInit(): void {

    const clicks$ = fromEvent(this.button.nativeElement, 'click');
    console.log('this.button.nativeElement = ', this.button.nativeElement);

    clicks$
      .pipe(
        exhaustMap(() => this.fakeApiCall())
      )
      .subscribe((response) => {
        console.log('API call response:', response);
      });
  }

  fakeApiCall() {
    console.log('API call started');
    return of('API Response').pipe(delay(3000)); // resolves after 3 seconds
  }



}
