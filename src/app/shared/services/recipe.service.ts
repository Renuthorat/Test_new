import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ingredient } from "../model/ingredient.model";
import { Recipe } from "../model/recipe.model";
import { ShoppingService } from "./shopping.service";

@Injectable()

export class RecipeService {
  private recipeList = [
    new Recipe(
      'Pav-Bhaji',
      'Dish for lunch/dinner menu',
      // './assets/image/pav-bhaji.jpg',
      'https://img.freepik.com/free-photo/pav-bhaji-is-fast-food-dish-from-india-consisting-thick-vegetable-curry-served-with-soft-bread-roll_466689-74177.jpg',
      [
        new Ingredient('Butter', 'Amul', 1, 57, 'https://m.media-amazon.com/images/I/51F2oFhDzEL._SY741_.jpg'),
        new Ingredient('Spices', 'MDH', 2, 350, 'https://m.media-amazon.com/images/I/91I2PWqe56L._SY741_.jpg'),
      ]
    ),
    new Recipe(
      'Biryani',
      'An party dish to be consumed and pending from EA-17 students',
      // './assets/image/biryani.jpg',
      'https://i0.wp.com/recipes.justhindi.in/wp-content/uploads/2017/02/veg-biryani.jpg',
      [
        new Ingredient('Rice', 'India gate', 1, 40, 'https://m.media-amazon.com/images/I/51xbssj5S2L._SX300_SY300_QL70_FMwebp_.jpg'),
        new Ingredient('Spices', 'MDH', 2, 350, 'https://m.media-amazon.com/images/I/91I2PWqe56L._SY741_.jpg'),
      ]
    ),
    new Recipe(
      'Misal-Pav',
      'Dish for lunch/dinner menu',
      'https://b.zmtcdn.com/data/pictures/7/19786637/84afe97ec60c7ea9a7f0732613bb94b8.jpg',
      [
        new Ingredient('Farsan', 'Laxminarayan', 1, 100, 'https://sitashreelaxminarayanchiwda.com/wp-content/uploads/2022/02/Farsan-500g-Packet-1.jpg'),
        new Ingredient('Spices', 'MDH', 2, 350, 'https://m.media-amazon.com/images/I/91I2PWqe56L._SY741_.jpg'),
        new Ingredient('LPG', 'Bharat-gas', 1, 1050, 'https://5.imimg.com/data5/CA/SZ/RR/SELLER-30991676/bharat-gas-cylinder-500x500.jpg'),
      ]
    )
  ];
  // newlySelectedRecipe = new EventEmitter();
  recipeSubject = new BehaviorSubject(this.recipeList.slice())
  constructor(private shopServ: ShoppingService) { }
  // getRecipeList() {
  //   return this.recipeList.slice();
  // }
  catchIngredientListFromRecipeDetails(ingredList: any) {
    // console.log(ingredList)
    this.shopServ.catchIngredientListFromRecipeService(ingredList)
  }
  getRecipeByIndex(ind: any): any {
    if (ind > this.recipeList.length) {
      console.log('The recipe is not available for this id!');
      return
    }
    return this.recipeList[ind]
  }
  addNewRecipe(newRecipe: Recipe) {
    this.recipeList.push(newRecipe);
    this.recipeSubject.next(this.recipeList.slice())
    return this.recipeList.slice().length
  }
  setNewlyEditedRecipeObj(editedRecipe: Recipe, editIndex: any) {
    this.recipeList[editIndex]=editedRecipe;
    this.recipeSubject.next(this.recipeList.slice())
  }
}