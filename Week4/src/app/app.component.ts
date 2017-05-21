import { Component } from '@angular/core';
import { MyDataService } from './myDataService';
import { TemperatureService} from './temperatureService';

@Component({
  selector: 'my-app',
  template: `<h1>Hello world!  {{title}}</h1>
  <ul><li *ngFor="let name of names">{{name}}</li></ul>
  <p>My name: {{myName}}</p>
  <p>6 degree celsius to fahrenheit:{{celsius}}</p>`,
  // 'providers' allows you to create and pass an instance
  // of the class to the constructor header.
  providers: [MyDataService, TemperatureService]
})
export class AppComponent {
  public title = 'This is Angular2!';
  names: Array<any>;
  myName: String;
  celsius: number;
  // Create instance of 'MyDataService' right in the constructor
  // header.
  constructor(myDataService: MyDataService, temperatureService: TemperatureService) {
    // Use service to call getNames() method.
    this.names = myDataService.getNames();
    this.myName = myDataService.getMyName();
    this.celsius = temperatureService.converFromCToF(6);
  }
}
