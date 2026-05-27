import { EventEmitter} from'@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../model/ingredient.model';

export class ShoppingService{
 
    private ingredentList=[
        new Ingredient('Oil','Gemini',15,2500,'https://www.justgotochef.com/img/1530093000-Gemini-Refined%20Sunflower%20Oil-Front.jpg'),
        new Ingredient('Salt','Tata',2,40,'https://m.media-amazon.com/images/I/51wDB0kc2CL._SX300_SY300_QL70_FMwebp_.jpg'),
        new Ingredient('Chilli','MDH',1,50,'https://www.excelebiz.in/wp-content/uploads/2022/07/MDH-Masala-Logo.jpg')
      
    ];
    // listEmitter =new EventEmitter();
    listEmitter =new Subject();
    // listSubject: any;
    getIngredientList(){
        return this.ingredentList.slice();
    }
    addNewIngredient(ingred :any){
        this.ingredentList.push(ingred);
        this.listEmitter.next(this.getIngredientList());
    }
    catchIngredientListFromRecipeService(ingredList:any){
        this.ingredentList.push(...ingredList);
        this.listEmitter.next(this.getIngredientList());
    }
}