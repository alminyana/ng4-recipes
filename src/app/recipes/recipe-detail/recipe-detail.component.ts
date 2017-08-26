import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipeService]
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipeRecived: Recipe;
  recipeRecived: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeRecived = this.recipeService.getRecipeById(this.id);
      }
    );
  }

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeRecived.ingredients);
  }

}
