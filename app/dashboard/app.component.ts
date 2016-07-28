import { Component, OnInit } from '@angular/core';

import { LightBoxComponent } from '../common/lightbox/lightbox.component'

@Component({
    selector: 'my-app',
    templateUrl: './app/dashboard/app.component.html',
    styleUrls: ['./app/dashboard/app.component.css'],
    directives: [LightBoxComponent]
})
export class AppComponent implements OnInit {
  boxes: any;

  constructor() {
  }

  ngOnInit() {
    this.boxes = [
      {title: 'test'},
      {title: 'test1'},
      {title: 'test'},
      {title: 'test1'}
    ];
  }
}
