import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styles: []
})
export class NgclassComponent implements OnInit {

  typeAlert: string = 'alert-danger';
  properties: Object = {
    danger: false
  }
  loadingStatus: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  upload() {
    this.loadingStatus = true;
    setTimeout( () => {
      this.loadingStatus = false;
    }, 5000);
  }

}
