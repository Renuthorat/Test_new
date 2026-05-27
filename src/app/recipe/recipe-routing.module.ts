import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NoRecipeComponent } from "./no-recipe/no-recipe.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";
import { RecipeComponent } from "./recipe.component";


const recipeRoutes=[
    {path :'',component :RecipeComponent,children : [
        {path:'',component :NoRecipeComponent},
        {path:'new',component :RecipeFormComponent},
        {path:':index',component :RecipeDetailsComponent},
        {path:':index/edit',component:RecipeFormComponent}
      ]},
];
@NgModule({
    imports:[RouterModule.forChild(recipeRoutes)],
    exports:[RouterModule]
})
export class RecipeRoutingModule{}