import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RecipeComponent } from './recipe/recipe.component';
// import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
// import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
// import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping/shopping-list/shopping-item/shopping-item.component';
import { HeaderComponent } from './header/header.component'
import { ShoppingService } from './shared/services/shopping.service';
import { NoRecipeComponent } from './recipe/no-recipe/no-recipe.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // RecipeComponent,
    // RecipeListComponent,
    // RecipeDetailsComponent,
    // RecipeItemComponent,
    ShoppingComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    ShoppingItemComponent,
    HeaderComponent
    // NoRecipeComponent,
    // RecipeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
