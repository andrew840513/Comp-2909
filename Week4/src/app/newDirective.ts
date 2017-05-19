/**
 * Created by Andrew on 2017-05-18.
 */
import { Component, Input} from '@angular/core';

// Define second directive.
@Component({
  // Selector uses lower case with hyphens.
  selector: 'second-directive',
  template: `<h3>This is the second directive! {{firstName}}</h3>
            <app-third [data] = "data"></app-third>`,
})

export class NewDirective {
  @Input() firstName;
  data = "hi";
}
