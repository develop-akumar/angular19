import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wc1',
  imports: [],
  templateUrl: './wc1.component.html',
  styleUrl: './wc1.component.scss'
})
export class Wc1Component {
  id!:number
  name!:string

  constructor(private route : ActivatedRoute){
    console.log('route = ', route);
    const params = this.route.snapshot.params
    this.id = params["id"]
    this.name = params["name"]

    const queryParams = this.route.queryParams
    console.log('queryParams = ', queryParams);


  }

}
