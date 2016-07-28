/**
 * Created by ghita pop on 7/28/2016.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './app/common/lightbox/lightbox.component.html',
  styleUrls: ['./app/common/lightbox/lightbox.component.css']
})
export class LightBoxComponent {
  @Input() box: {
    title: string
  };

  constructor() {}

}
