import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  isNewRecipe: boolean = false;
  indexOfcurrentRecipeToEdit: any;
  myRecipeForm: FormGroup | any;
  constructor(private activeRoute: ActivatedRoute, private fb: FormBuilder, private recipeServ: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.activeRoute.params.subscribe((param: any) => {
      if (param.index) {
        this.indexOfcurrentRecipeToEdit = param.index;
        this.isNewRecipe = false;
        const myCurrentRecipe = this.recipeServ.getRecipeByIndex(this.indexOfcurrentRecipeToEdit);
        // this.isNewRecipe = true;
        // this.initForm();
        for (let i = 0; i < myCurrentRecipe?.ingredientList?.length; i++) {
          this.myRecipeForm.get('rIngreds').push(
            this.fb.group({
              nameIngred: this.fb.control(myCurrentRecipe?.ingredientList[i].name, Validators.required),
              brandIngred: this.fb.control(myCurrentRecipe?.ingredientList[i].brand, Validators.required),
              qtyIngred: this.fb.control(myCurrentRecipe?.ingredientList[i].qty, Validators.required),
              priceIngred: this.fb.control(myCurrentRecipe?.ingredientList[i].price, Validators.required),
              imgIngred: this.fb.control(myCurrentRecipe?.ingredientList[i].img, Validators.required)
            })
          )
        }
        this.myRecipeForm.patchValue({
          rName: myCurrentRecipe.name,
          rDesc: myCurrentRecipe.description,
          rImg: myCurrentRecipe.imgData
        })
      } else {
        this.isNewRecipe = true;
        this.myRecipeForm.get('rIngreds').push(
          this.fb.group({
            nameIngred: this.fb.control(null, Validators.required),
            brandIngred: this.fb.control(null, Validators.required),
            qtyIngred: this.fb.control(null, Validators.required),
            priceIngred: this.fb.control(null, Validators.required),
            imgIngred: this.fb.control(null, Validators.required)
          })
        )
      }
    })
  }
  initForm() {
    this.myRecipeForm = this.fb.group({
      rName: this.fb.control('', Validators.required),
      rDesc: this.fb.control('', Validators.required),
      rImg: this.fb.control('', Validators.required),
      rIngreds: this.fb.array([
        this.fb.group({
          nameIngred: this.fb.control(null, Validators.required),
          brandIngred: this.fb.control(null, Validators.required),
          qtyIngred: this.fb.control(null, Validators.required),
          priceIngred: this.fb.control(null, Validators.required),
          imgIngred: this.fb.control(null, Validators.required)
        })
      ])
    })
  }
  addnewIngredient() {
    const ingredGroup = this.fb.group({
      nameIngred: this.fb.control(null, Validators.required),
      brandIngred: this.fb.control(null, Validators.required),
      qtyIngred: this.fb.control(null, Validators.required),
      priceIngred: this.fb.control(null, Validators.required),
      imgIngred: this.fb.control(null, Validators.required),
    })
    this.myRecipeForm.get('rIngreds').push(ingredGroup)
  }
  onSubmit() {
    const ingredList = [];
    for (let i = 0; i < this.myRecipeForm.value.rIngreds.length; i++) {
      ingredList.push(new Ingredient(this.myRecipeForm.value.rIngreds[i].nameIngred, this.myRecipeForm.value.rIngreds[i].brandIngred, this.myRecipeForm.value.rIngreds[i].qtyIngred, this.myRecipeForm.value.rIngreds[i].priceIngred, this.myRecipeForm.value.rIngreds[i].imgIngred))
    }
    const recipeObj = new Recipe(this.myRecipeForm.value.rName, this.myRecipeForm.value.rDesc, this.myRecipeForm.value.rImg, ingredList);
    // this.recipeServ.addNewRecipe(newRecipe)
    // this.myRecipeForm.reset()
    if (this.isNewRecipe) {
      const newlyAddedRecipeIndex = this.recipeServ.addNewRecipe(recipeObj);
      this.router.navigate(['../' + (newlyAddedRecipeIndex - 1)], { relativeTo: this.activeRoute })
    } else {
      this.recipeServ.setNewlyEditedRecipeObj(recipeObj, this.indexOfcurrentRecipeToEdit);
      this.router.navigate(['../'], { relativeTo: this.activeRoute })
    }
    this.myRecipeForm.reset()
  }

}
