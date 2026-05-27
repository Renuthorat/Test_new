import { Component, Injectable} from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers :[
    RecipeService
  ]
})
@Injectable()
export class RecipeComponent {

// currentSelectedRecipe :any;

constructor( ){
// this.recipeServ.newlySelectedRecipe.subscribe((value :any)=>{
// this.currentSelectedRecipe=value;
// })

}
}
// catchEventFromChildList(catchedRecipeData:any){
//   this.currentSelectedRecipe=catchedRecipeData;
// }
 

// }
