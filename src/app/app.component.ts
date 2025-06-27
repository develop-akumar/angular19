import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    CommonModule,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular';

  isDisabled:any
  count = 0

  imgPath: string = "assets/Angular.jpg"

  myObject =  {id:1, name:"apple"}

  array = [
    {id:1, name:"apple"},
    {id:2, name:"mango"},
    {id:3, name:"banana"},
    {id:4, name:"watermelon"}
  ]

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

  trackByFunction(item:any){
    return item.id
  }

  updateItem(){
    this.array[1] = {id:2, name:"grapes"}
  }

  add(){
    return 2
  }

}
