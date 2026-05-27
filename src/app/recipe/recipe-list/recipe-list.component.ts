import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService} from 'src/app/shared/services/recipe.service';
// import { Recipe } from 'src/app/shared/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipeList  :any = []
  //   new Recipe(
  //     'Pav-Bhaji',
  //     'Dish for lunch/dinner menu',
  //     './assets/image/pav-bhaji.jpg',

  //   ),
  //   new Recipe(
  //     'Biryani',
  //     'An party dish to be consumed and pending from EA-17 students',
  //     './assets/image/biryani.jpg',

  //   ),
  //   new Recipe(
  //     'Misal-Pav',
  //     'Dish for lunch/dinner menu',
  //     './assets/image/misal.jpg',

  //   )
  // ];
  // @Output('sendEventToParentRecipe'
  // ) listEventEmitter = new EventEmitter();
  constructor (private recipeServ : RecipeService ){
    this.recipeServ.recipeSubject.subscribe((recipeList:Recipe[])=>{
      this.recipeList=recipeList
    })
  }
  // catchEventFromChildItem(catchedRecipeData: any) {
  //   this.listEventEmitter.emit(catchedRecipeData);
  // }

}
