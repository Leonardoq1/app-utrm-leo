import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-details-food',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TitleCasePipe,CurrencyPipe, MatIconModule],
  templateUrl: './details-food.component.html',
  styleUrl: './details-food.component.scss'
})
export class DetailsFoodComponent implements OnInit {

  constructor(public foodservice:FoodService){

  }
  activedRoute:ActivatedRoute = inject(ActivatedRoute);
  foodId:number = -1;
  food?:Food = {
    name:'',
    description:'',
    image:'',
    category:'',
    price:0
    
  }


  ngOnInit(): void {
    this.foodId = Number(this.activedRoute.snapshot.params['id']);
    //this.food = this.foodservice.getOne(this.foodId);
    this.foodservice.getOneFood(this.foodId).subscribe({
      next:(value)=> (this.food = value),
      error:(e) => console.error(e),
      complete:()=> console.info('complete'),
    })
    console.log(this.food);
    
  
  }

}
