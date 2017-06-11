import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'http://images.media-allrecipes.com/userphotos/560x315/662790.jpg'),
    new Recipe('A Second Recipe', 'This is a Second Recipe test', 'http://images.media-allrecipes.com/userphotos/250x250/00/69/35/693521.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
