import { Component, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent  {
@ViewChild('myIngName') iName :any;
@ViewChild('myIngBrand') iBrand :any;
@ViewChild('myIngImg') iImg :any;
@ViewChild('myIngQty') iQty :any;
@ViewChild('myIngPrice') iPrice :any;

// @Output('sendIngredientToParent') ingEmitter=new EventEmitter();
constructor(private shopServ : ShoppingService){

}

// 1 way  addNewIngredient(iName :any,iBrand:any,iQty:any,iPrice:any){
//   const newIngred=new Ingredient(iName.value,iBrand.value,iImg.value,iQty.value,iPrice.value)
// console.log(newIngred)
// }
  
addNewIngredient(){
  const newIngred=new Ingredient(
    this.iName.nativeElement.value,this.iBrand.nativeElement.value,
   +this.iQty.nativeElement.value,+this.iPrice.nativeElement.value,this.iImg.nativeElement.value
  );
  this.shopServ.addNewIngredient(newIngred);
  // this.ingEmitter.emit(newIngred);
  this.iName.nativeElement.value=this.iBrand.nativeElement.value=
  this.iQty.nativeElement.value=this.iPrice.nativeElement.value=this.iImg.nativeElement.value = '';


  // console.log(newIngred)
}

}
