import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('getRecipeFromParent') recipe: any;
  @Input('currentRecipeIndex') index:any;
  // @Output('sendEventToParentList') itemEventEmitter = new EventEmitter()
  constructor (private recipeServ : RecipeService,private router :Router, private activeRoute:ActivatedRoute){
  }
  recipeSelected() {
    // console.log('clicked the recipe',this.recipe);
    // this.itemEventEmitter.emit(this.recipe);
    // this.itemEventEmitter.emit();
    // this.recipeServ.newlySelectedRecipe.emit(this.recipe)
    this.router.navigate([this.index],{relativeTo:this.activeRoute})
  }
}
