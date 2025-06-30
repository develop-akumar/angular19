import { Component, ElementRef, ContentChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.scss'
})
export class ChildCompComponent implements AfterViewInit {

  

  ngAfterViewInit() {
    
  }

}
