import { Product } from './Product'

export class Food extends Product {
  constructor() {
    super()
    this.ingredients = ['Farinha de trigo', 'Presunto', 'Maionese', 'Pimenta'];
  }
}