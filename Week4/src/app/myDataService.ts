/**
 * Created by Andrew on 2017-05-18.
 */

// This is the service.
export class MyDataService {
  names: Array<any>;
  myName: String = 'Andrew';
  constructor() {
    this.names = ['John', 'Mary', 'Joan'];
  }
  getNames() {
    return this.names;
  }

  getMyName(){
    return this.myName;
  }
}
