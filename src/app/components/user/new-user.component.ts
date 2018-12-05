import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.parent.params.subscribe(data => {
      console.log('Child Component New User');
      console.log(data);
    });
   }

  ngOnInit() {
  }

}
