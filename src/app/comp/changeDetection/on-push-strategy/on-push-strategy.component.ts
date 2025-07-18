import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-on-push-strategy',
  imports: [
    ChildComponent
  ],
  templateUrl: './on-push-strategy.component.html',
  styleUrl: './on-push-strategy.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnPushStrategyComponent {

  count: number = 0

  update() {
    this.count++
  }

  get output(){
    console.log('[on Push Strategy Component] = ', );
    return 10
  }

}
