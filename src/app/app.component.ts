import { CommonModule } from '@angular/common';
import {
  Component, ElementRef, HostBinding, HostListener, OnInit, viewChild, ViewChild,
  AfterViewInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { HighlightElementDirective } from './highlight-element.directive';
import { AppendTextPipe } from './append-text.pipe';
import { SortNumberPipe } from './pipes/sort-number.pipe';
import { LettercountPipe } from './pipes/lettercount.pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    CommonModule,
    FormsModule,
    RouterLink,
    // ChildCompComponent,
    // AppendTextPipe,
    // SortNumberPipe,
    // LettercountPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {


  array = [
    { id: 1, name: "arv1" },
    { id: 2, name: "arv2" },
    { id: 3, name: "arv3" },
    { id: 4, name: "arv4" },
    { id: 5, name: "arv5" }
  ]

  numberarray:number[] = [1,2,3,4,5]

  @ViewChild('color') colorInput!: ElementRef

  // @HostBinding('style.backgroundColor') 
  selectedColor: string = '#000000'

  @HostListener('input', ['$event.target.value'])
  onColorChange(color: string) {
    // console.log('color = ', color);
    this.selectedColor = color
  }


  ngAfterViewInit() {
    // this.selectedColor = this.colorInput.nativeElement.value
  }

  get out(){
    // console.log('[App Component]  ' );
    return 50
  }

}
