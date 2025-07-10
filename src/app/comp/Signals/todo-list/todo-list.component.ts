import { CommonModule } from '@angular/common';
import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todoList: WritableSignal<string[]> = signal([])

  textValue: string = '';

  add() {
    this.todoList.update((val: string[]) => {
      return [...val, this.textValue]
    })

    this.textValue = "";
  }

  delete(index: number): void {
    this.todoList.update((val) => {
      return val.filter((str) => {
        return str !== val[index]
      })
    })
  }


}
