import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-child2',
  imports: [],
  templateUrl: './news-child2.component.html',
  styleUrl: './news-child2.component.scss'
})
export class NewsChild2Component {

  id!: number
  name!: string

  constructor(private route: ActivatedRoute) {
    const param = this.route.queryParams.subscribe((params) => {
      this.id = params["id"]
      this.name = params["name"]

    })
    console.log('this.route.snapshot.paramMap.get("id") = ', this.route.snapshot.paramMap.get('id'));
  }

}
