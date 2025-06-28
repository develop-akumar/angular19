import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildCompComponent } from './child-comp/child-comp.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    CommonModule,
    FormsModule,
    ChildCompComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular';

  isDisabled: any
  count = 0

  imgPath: string = "assets/Angular.jpg"

  myObject = { id: 1, name: "apple" }

  array = [
    { id: 1, name: "apple" },
    { id: 2, name: "mango" },
    { id: 3, name: "banana" },
    { id: 4, name: "watermelon" }
  ]
  mathValue: number = 0
  ngOnInit(): void {


    // setTimeout(() => {
    //   this.title = this.title + this.count
    // }, 2000);

    // setTimeout(() => {
    //   this.title = this.title + 1
    // }, 4000);
    
  }

  updateValue(a: any) {
    console.log('a = ', a);
    this.count++
    this.title = this.title + 1
  }

  keypressed(event: any) {
    console.log('event.shiftKey = ', event.shiftKey);
    console.log('event.key = ', event.key);
  }

  trackByFunction(item: any) {
    return item.id
  }

  updateItem() {
    this.array[1] = { id: 2, name: "grapes" }

    setInterval(() => {
      this.mathValue = Math.floor(Math.random() * 10)
    }, 1000);

    console.log('this.wrapper = ', this.wrapper);
     const divElement:HTMLElement = this.wrapper.nativeElement;
    divElement.style.color = 'maroon'
  }

  @ViewChild('wrapper') wrapper!:ElementRef
  

  add() {
   

  }

}
