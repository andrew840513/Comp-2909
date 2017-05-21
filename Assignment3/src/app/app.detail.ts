/**
 * Created by Andrew on 2017-05-21.
 */
import {Component} from '@angular/core';
import {FoodService} from './app.foodService';
import {FoodItem} from './app.foodItem';
import {ActivatedRoute, Params}       from '@angular/router';

@Component({
  selector: 'detail-app',
  templateUrl: './View/app.detail.html',
  styleUrls: ['./View/css/style.css']
})
export class DetailComponent {
  foodItem: FoodItem;

  constructor(private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      let ID: number = params['id'] - 1;
      let fooditems: FoodItem[] = FoodService.getFoodItem();
      this.foodItem = fooditems[ID];
    });
  }
}
