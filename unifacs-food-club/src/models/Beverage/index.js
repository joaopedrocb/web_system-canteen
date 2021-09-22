import { Product } from '../Product'

export class Beverage extends Product {
  constructor() {
    super()
    this.provider = 'Pepsi';
  }
}