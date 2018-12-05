import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-color',
  template: `
    <p>
      style-color works from color component!
    </p>
  `,
  styles: [`
    p {
      color: red;
      font-size: 30px;
    }
  `]
})
export class StyleColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
