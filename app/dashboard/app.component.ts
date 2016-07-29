import { Component, OnInit } from '@angular/core';

import { LightBoxComponent } from '../common/lightbox/lightbox.component';
import { LightBoxService } from '../common/lightbox/lightbox.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/dashboard/app.component.html',
    styleUrls: ['./app/dashboard/app.component.css'],
    directives: [LightBoxComponent],
    providers: [LightBoxService]
})
export class AppComponent implements OnInit {
  boxes: any[];

  constructor(private _lightBoxService: LightBoxService) {
  }

  ngOnInit() {
    this.boxes = this._lightBoxService.getBoxes();
  }
}
