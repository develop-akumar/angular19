import { CommonModule } from '@angular/common';
import {
  Component, ElementRef, HostBinding, HostListener, OnInit, viewChild, ViewChild,
  AfterViewInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { HighlightElementDirective } from './highlight-element.directive';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    CommonModule,
    FormsModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('color') colorInput!: ElementRef

  // @HostBinding('style.backgroundColor') 
  selectedColor: string = '#000000'

  @HostListener('input', ['$event.target.value'])
  onColorChange(color: string) {
    console.log('color = ', color);
    this.selectedColor = color
  }


  ngAfterViewInit() {
    this.selectedColor = this.colorInput.nativeElement.value
  }

}
