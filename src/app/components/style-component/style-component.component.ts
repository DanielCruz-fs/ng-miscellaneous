import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-component',
  template: `
    <p class="lead" [style.fontSize.px]="size">
    <i class="fas fa-qrcode"></i> ngStyle works!
    </p>
    <div class="btn-group" role="group">
    <button type="button" class="btn btn-info" (click)="size = size + 5 "><i class="fas fa-search-plus"></i></button>
    <button type="button" class="btn btn-warning" (click)="size = size - 5 "><i class="fas fa-search-minus"></i></button>
    </div>
  `,
  styles: []
})
export class StyleComponentComponent implements OnInit {
  size: number = 20;
  constructor() { }

  ngOnInit() {
  }

}
