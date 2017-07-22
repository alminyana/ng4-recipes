import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipeService]
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeRecived: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeRecived.ingredients);
  }

}
