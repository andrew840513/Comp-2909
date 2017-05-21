/**
 * Created by Andrew on 2017-05-21.
 */
import {Component} from '@angular/core';
import {FoodService} from './app.foodService';
import {FoodItem} from './app.foodItem';

@Component({
  selector: 'home-app',
  templateUrl: './View/app.home.html',
  styleUrls: ['./View/css/style.css']
})
export class HomeComponent {
  foodItems: FoodItem[] = FoodService.getFoodItem();
}
