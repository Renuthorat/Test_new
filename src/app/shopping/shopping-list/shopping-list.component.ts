
import { Component } from '@angular/core';
// import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent  {
  ingredientList :any[]=[]

// ingredientList : Ingredient[]=[
//   new Ingredient('Oil','Gemini',15,2500,'https://www.justgotochef.com/img/1530093000-Gemini-Refined%20Sunflower%20Oil-Front.jpg'),
//   new Ingredient('Salt','Tata',2,40,'https://m.media-amazon.com/images/I/51wDB0kc2CL._SX300_SY300_QL70_FMwebp_.jpg'),
//   new Ingredient('Chilli','MDH',1,50,'https://www.excelebiz.in/wp-content/uploads/2022/07/MDH-Masala-Logo.jpg')
// ]
// @Input('getNewIngredientFromParentMain') set ingredientSetter
// (newIngredientReceived :any){
//   if(newIngredientReceived){
//     this.ingredientList.push(newIngredientReceived)
//   }
// };

constructor(private shopServ : ShoppingService){
this.ingredientList =this.shopServ.getIngredientList();
this.shopServ.listEmitter.subscribe((value :any)=>{
  // this.shopServ.listSubject.subscribe((value :any)=>{

  this.ingredientList=value;
})
}
  


}
