import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  // standalone: true
})
export class TodoListComponent implements AfterViewInit, OnInit, OnDestroy {

  constructor() {
    console.log('console constructor = ',);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  todoList: WritableSignal<string[]> = signal(["Ram"])

  textValue: string = '';

  add(text: HTMLInputElement): void {
    this.todoList.update((val: string[]) => {
      // return [...val, this.textValue]
      return [...val, text.value]
    })

    this.textValue = "";
    text.focus()
  }

  delete(index: number): void {
    this.todoList.update((val) =>
      // val.filter((str) => {
      //   return str !== val[index]
      // })

      [...this.todoList().slice(0, index), ...this.todoList().slice(index + 1)]
    )
  }


  ngAfterViewInit(): void {
    let button = document.getElementById("btn")

    if (button) {
      document.addEventListener("keydown", (event) => {
        console.log('shortcut = ', );
        if (event.altKey && event.key === "a") {
          this.add2()
        }
      })
    }
  }

  add2(): void {
    this.todoList.update((val: string[]) => {
      // return [...val, this.textValue]
      return [...val, this.textValue]
    })

    this.textValue = "";
    document.getElementById('addtext')?.focus()

  }

  ngOnDestroy(): void {
    document.removeEventListener("keydown", (event) => {
      console.log('shortcut = ', );
      if (event.altKey && event.key === "a") {
        this.add2()
      }
    }); 
  }


}
