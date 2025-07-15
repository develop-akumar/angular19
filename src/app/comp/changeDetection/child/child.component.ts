import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  count:number = 0

  get output(){
    console.log('[Child Component] = ', this.count);
    return 20
  }

  

  update(){
    this.count++

  }

}
