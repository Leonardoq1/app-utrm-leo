import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu:Food[]=[
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
      name: "Pollo asado",
      description: "Pollo el valiente",
      category: 'food',
      image: 'https://www.paulinacocina.net/wp-content/uploads/2021/11/pollo-asado-1200x800.jpg',
      price: 70
    },
    {
      id: 3,
      name: "Pollo asado",
      description: "Pollo el valiente",
      category: 'food',
      image: 'https://www.paulinacocina.net/wp-content/uploads/2021/11/pollo-asado-1200x800.jpg',
      price: 70
    },

  ]
  constructor() { }

  public getAllFoods():Food[]{
    return this.menu;
  }
}
