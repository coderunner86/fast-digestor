import { Injectable } from '@angular/core';
import { Costume } from './costume';
import { data } from './data.json';
@Injectable({
  providedIn: 'root',
})
export class CostumeItems {
  // this is where we will recreate our array of Costumes types

  costumes: Costume[] = data;

  constructor() {}

  // this is where we will write methods to export our Costumes array
  getCostumes() {
    return this.costumes;
  }
}
