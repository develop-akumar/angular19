import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-from-api',
  imports: [CommonModule],
  templateUrl: './data-from-api.component.html',
  styleUrl: './data-from-api.component.scss'
})
export class DataFromApiComponent {

  jsonData$!: Observable<any>

  constructor(){
    this.fetchData()
  }

  fetchData() {
    let url: string = "https://dummyjson.com/products/category-list"

    this.jsonData$ = new Observable((observer) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          observer.next(data)
          observer.complete()
        })
        .catch((e) => {
          observer.error(e)
        })
    })
  }

}
