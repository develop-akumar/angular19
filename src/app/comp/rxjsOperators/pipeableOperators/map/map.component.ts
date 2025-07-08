import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  obs = of(1,2,3,4)
  obs2 = this.obs.pipe(
    map((val)=> val * 2)
  )

  constructor(){
    console.clear();
    this.obs2.subscribe((val)=>{
      console.log('map operator = ', val);
    })
  }

}
