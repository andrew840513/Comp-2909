/**
 * Created by Andrew on 2017-05-18.
 */
export class TemperatureService {

  constructor() {}

  converFromCToF(celsius: number) {
    return celsius * 1.8 + 32;
  }
}
