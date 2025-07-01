import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [
    RouterOutlet
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

  constructor(private router: Router) { }

  navigate1() {
    this.router.navigate(["news/newschild1"], { queryParams: { id: 12, name: "Rohan" } })
  }

  navigate2() {
    this.router.navigate(["news/newschild2"])
    // { queryParams: { id: 50, name: "Kajal" } }
  }

  navigateByUrl() {
    this.router.navigateByUrl("/news/newschild1")
  }

}
