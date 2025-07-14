import { HttpClient } from '@angular/common/http';
import { Component, linkedSignal, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-task2-signal',
  imports: [FormsModule],
  templateUrl: './task2-signal.component.html',
  styleUrl: './task2-signal.component.scss'
})
export class Task2SignalComponent {

  allItems!: Array<any>
  searchText: WritableSignal<string> = signal("")
  filteredItems:WritableSignal<Array<any>> = linkedSignal<string, Array<any>>({
    source: this.searchText,
    computation: () => {

      return this.allItems.filter((prod) => {

        if (this.selectedCategory == "All") {
          return prod.title.toLowerCase().includes(this.searchText().toLowerCase())
        }
        return prod.category == this.selectedCategory && prod.title.toLowerCase().includes(this.searchText().toLowerCase())
      })
    }
  })
  categories!: Array<any>
  selectedCategory: string = "All"

  constructor(private http: HttpClient) {
    this.fetch()
  }

  fetch() {
    const url: string = 'https://fakestoreapi.com/products'
    this.http.get<any>(url).subscribe({
      next: (res) => {
        console.log('res = ', res);
        this.allItems = res;
        this.categories = [...new Set(res.map((e: any) => e.category))]
        this.categories.unshift("All")
        console.log('this.categories = ', this.categories);
      },
      error: (e) => console.log('error = ', e)
    })
  }

  onOptionSelect(e: any) {
    console.log('e = ', e);
    let category = e.target.value
    if (category == "All") {
      this.filteredItems.set(this.allItems)
    } else {
      this.filteredItems.set(this.allItems.filter((prod) => prod.category == category)) 
    }

    this.searchText.set("")
  }

  onSearchText() {
    this.searchText

    this.filteredItems = this.allItems.filter((prod) => {

      if (this.selectedCategory == "All") {
        return prod.title.toLowerCase().includes(this.searchText.toLowerCase())
      }
      return prod.category == this.selectedCategory && prod.title.toLowerCase().includes(this.searchText.toLowerCase())
    }
    )
  }


}
