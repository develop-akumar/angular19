import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective {

  constructor() { }

  @HostBinding('style.color') color = "red"
  @HostBinding('style.backgroundColor') bgColor = "blue"

}
