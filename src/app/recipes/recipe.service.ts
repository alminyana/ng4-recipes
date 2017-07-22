import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'http://images.media-allrecipes.com/userphotos/560x315/662790.jpg'),
    new Recipe('A Second Recipe', 'This is a Second Recipe test', 'http://images.media-allrecipes.com/userphotos/250x250/00/69/35/693521.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); //slice() hace una copia del array recipes que es un atributo privado de la clase
  }


}
