import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    console.log('Custom directive ready.');
   }

   @HostListener('mouseenter') mouseEnter() {
     this.el.nativeElement.style.backgroundColor = 'pink';
   }
   @HostListener('mouseleave') mouseLeave() {
     this.el.nativeElement.style.backgroundColor = null;
   }

}
