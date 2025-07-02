import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wc2',
  imports: [],
  templateUrl: './wc2.component.html',
  styleUrl: './wc2.component.scss'
})
export class Wc2Component {
  id!: number
  name!: string

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      console.log('params = ', params);
      this.id = params["id"]
      this.name = params["name"]
    })
  }

}
