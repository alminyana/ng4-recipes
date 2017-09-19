import { Component, OnInit } from '@angular/core';

//ElementRef and ViewChild is for local reference
//import {ElementRef, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // local reference
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    console.log(value);

    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);

  }

}
