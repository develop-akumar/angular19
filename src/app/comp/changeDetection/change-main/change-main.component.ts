import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-change-main',
  imports: [
    RouterLink,
    RouterOutlet
],
  templateUrl: './change-main.component.html',
  styleUrl: './change-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeMainComponent implements OnInit {

  private zone = inject(NgZone)

  ngOnInit(): void {
    console.log('ChangeMainComponent initialized');

    setTimeout(() => {
      console.log('Timeout executed');
      // this.a
    }, 2000)
  }

  b = 10

  get a() {

    console.log('this.b = ', this.b);
    return this.b

    this.zone.runOutsideAngular(() => console.log('a  ', this.a))

    this.zone.runOutsideAngular(() => {
      console.log('run outside angular zone');
      // Simulate a long-running task
      for (let i = 0; i < 1000000000; i++) {
        // Do nothing, just loop
      }
    });
    return 'Hello from a getter';
  }

}
