import {Injectable} from '@angular/core';
import {Food} from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu: Food[] = [
    {
      id: 1,
      name: "Pollo asado",
      description: "Pollo el valiente",
      category: 'food',
      image: 'https://www.paulinacocina.net/wp-content/uploads/2021/11/pollo-asado-1200x800.jpg',
      price: 70
    },
    {
      id: 2,
      name: 'pizza',
      description: 'Pepperoni',
      category: 'food',
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 234,
    },
    {
      id: 3,
      name: 'Hamburguesa',
      description: 'La hamburguesa e chiapas :v',
      category: 'food',
      image: 'https://s3.abcstatics.com/media/gurmesevilla/2012/01/comida-rapida-casera.jpg',
      price: 80,
    },
    {
      id: 4,
      name: 'Picadas de chiapas',
      description: 'Una deliciosa comida.',
      category: 'food',
      image: 'https://isu.edu.mx/wp-content/uploads/2020/07/Sopes.jpg',
      price: 30
    }
  ];

  constructor() {
  }

  // * Get all food.
  public getAllFood(): Food[] {
    return this.menu;
  }

  // * Get one food.
  public getOne(id: number): Food | undefined {
    return this.menu.find(item => item.id == id);
  }

  // * Add new food.
  public addFood(food: Food){
    this.menu.push(food);
  }

  // * Update food.
  public updateFood(newFood: Food) {
    this.menu.forEach((food, index) => {
      if (food.id == newFood.id) {
        this.menu[index] = newFood;
      }
    })
  }

  // * Delete food.
  public deleteFood(deletedFood: Food) {
    this.menu.forEach((food, index) => {
      if (food.id == deletedFood.id) {
        this.menu.splice(index, 1);
      }
    })
  }
}
