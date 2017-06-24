import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MyDataService]
})
export class AppComponent {
  title = 'app works!';
  names: Array<any>;
  // Store instance of 'MyDataService' at class level.
  myDataService: MyDataService;

  // Create instance of 'MyDataService' right in the constructor
  // header.
  constructor(mydataDervice: MyDataService) {
    // Set class level reference.
    this.myDataService = mydataDervice;
    // Use service to call getNames() method.
    this.names = this.myDataService.getNames();
  }
}
