import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
// @Input('catchRecipeDataFromParent') recipe: Recipe | any;
recipe:any;
  constructor(private recipeServ :RecipeService,private activeRoute:ActivatedRoute){}
 ngOnInit(): void {
    // console.log('this is from recipe details =>',this.recipe)
    this.activeRoute.params.subscribe((param:any)=>{
    this.recipe=this.recipeServ.getRecipeByIndex(param.index);
    })
  }
  sendIngredient(){
    // console.log('send there ingredients 2',this.recipe.ingredientList)
    this.recipeServ.catchIngredientListFromRecipeDetails(this.recipe.ingredientList)
  }

}
