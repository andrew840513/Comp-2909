/**
 * Created by Andrew on 2017-05-18.
 */
import { Component, Input } from '@angular/core';

// Define second directive.
@Component({
  // Selector uses lower case with hyphens.
  selector: 'app-third',
  template: `<p>This is the third directive! Data:{{data}}</p>`,
})

export class ThirdDirective {
  @Input() data;
}
