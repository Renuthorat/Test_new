import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoRecipeComponent } from './recipe/no-recipe/no-recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path :'',redirectTo:'/recipe',pathMatch: 'full'},
  {path :'recipe',loadChildren : ()=>{ return import('./recipe/recipe.module').then((m:any)=>{ return m.RecipeModule})}},
  // {path :'shopping',loadChildren: ()=>{ return import('./shopping/shopping.module').then((m:any)=>{ return m.ShoppingModule})}},

  // {path :'recipe',component :RecipeComponent,children : [
  //   {path:'',component :NoRecipeComponent},
  //   {path:'new',component :RecipeFormComponent},
  //   {path:':index',component :RecipeDetailsComponent},
  //   {path:':index/edit',component:RecipeFormComponent}
  // ]},
  {path :'shopping',component :ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
