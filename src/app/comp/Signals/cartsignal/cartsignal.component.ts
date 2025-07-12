import { CommonModule } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';




interface item {
  name:string,
  price:number|null
}


@Component({
  selector: 'app-cartsignal',
  imports: [
    FormsModule
  ],
  templateUrl: './cartsignal.component.html',
  styleUrl: './cartsignal.component.scss'
})

export class CartsignalComponent {

  itemList:WritableSignal<Array<item>>= signal([])

  itemname:string = ""
  price!:number|null

  total= computed(()=>{
    if(this.itemList() && this.itemList().length){

      return this.itemList().reduce((acc:number, e:any)=>acc + e.price, 0)
    }else return undefined;

  })

  add(){
    let obj:item = {name:this.itemname, price : this.price}
    this.itemList.set([...this.itemList(), obj])

    this.itemname = ""
    this.price = null


  }

  remove(index:number){
    console.log('index = ', index);
    this.itemList.set(this.itemList().filter((e:any, i:any)=>i!=index))  

  }

  returnTotal(){

  }

}
