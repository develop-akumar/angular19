import { Component, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.scss'
})
export class ChildCompComponent {

  @ContentChild('showPara') paraRef?: ElementRef

}
