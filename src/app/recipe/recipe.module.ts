import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NoRecipeComponent } from "./no-recipe/no-recipe.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { RecipeComponent } from "./recipe.component";


@NgModule({
    declarations : [
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        NoRecipeComponent,
        RecipeFormComponent


    ],
    imports :[
        // SharedModule,
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule
    ]
})
export class RecipeModule{

}