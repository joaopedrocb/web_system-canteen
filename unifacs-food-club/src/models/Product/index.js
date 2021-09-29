// enums
import { ProductTypeEnum } from '../../common/domain';

export class Product {
  constructor() {
    this.type = ProductTypeEnum.FOOD;
    this.code = 101;
    this.name = 'Bauru';
    this.picture = '';
    this.price = 5;
    this.isBlocked = false;
  }
}