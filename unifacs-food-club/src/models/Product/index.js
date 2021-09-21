import { ProductType } from "../../enums/ProductType";

export class Product {
  constructor() {
    this.type = ProductType.FOOD;
    this.code = 101;
    this.name = 'Bauru';
    this.picture = '';
    this.price = 5;
    this.isBlocked = false;
  }
}