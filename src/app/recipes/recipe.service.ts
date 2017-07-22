import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'http://images.media-allrecipes.com/userphotos/560x315/662790.jpg',
      [ new Ingredient('brad', 4),
        new Ingredient('drinks', 10)]),
    new Recipe(
      'A Second Recipe',
      'This is a Second Recipe test',
      'http://images.media-allrecipes.com/userphotos/250x250/00/69/35/693521.jpg',
      [new Ingredient('oil', 2), new Ingredient('salt', 1)])
  ];

  constructor(private shopping: ShoppingListService){

  }

  getRecipes() {
    return this.recipes.slice(); //slice() hace una copia del array recipes que es un atributo privado de la clase
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shopping.addIngredients(ingredients);

  }


}
