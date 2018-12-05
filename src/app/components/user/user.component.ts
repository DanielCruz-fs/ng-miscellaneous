import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [``]
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe( data => {
      console.log('Parent User Component');
      console.log(data);
    });
   }

  ngOnInit() {
  }

}
