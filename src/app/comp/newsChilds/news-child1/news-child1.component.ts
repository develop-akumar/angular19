import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-child1',
  imports: [
    
  ],
  templateUrl: './news-child1.component.html',
  styleUrl: './news-child1.component.scss'
})
export class NewsChild1Component {

  id!:number
  name!:string

  constructor(private route:ActivatedRoute){
    const param = this.route.queryParams.subscribe((params)=>{
      this.id = params["id"]
      this.name = params["name"]
    
    })
    console.log('this.route.snapshot.paramMap.get("id") = ', this.route.snapshot.paramMap.get('id'));

  }

}
