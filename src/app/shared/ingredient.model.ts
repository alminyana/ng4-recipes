export class Ingredient {

  public name: string;
  public amount: number;

  constructor (name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

}

//this class annotation is the same than above but in abreviation mode......
//just settiing the visibility of class attributes in the constructor

// export class Ingredient {
//
//   constructor (public name: string, public amount: number) {}
//
// }
