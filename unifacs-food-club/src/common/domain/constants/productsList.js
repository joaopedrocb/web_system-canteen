import { ProductTypeEnum } from '../enums';

export const productsList = [
  {
    type: ProductTypeEnum.FOOD,
    code: 101,
    name: 'Bauru',
    picture: '',
    price: 5,
    isBlocked: true,
    ingredients: ['Farinha de trigo', 'Presunto', 'Maionese', 'Pimenta'],
  },
  {
    type: ProductTypeEnum.FOOD,
    code: 102,
    name: 'Dinoburguer',
    picture: '',
    price: 12,
    isBlocked: false,
    ingredients: ['Pão', 'Alface', 'Tomate', 'Carne'],
  },
  {
    type: ProductTypeEnum.BEVERAGE,
    code: 123,
    name: 'Fanta laranja',
    picture: '',
    price: 4,
    isBlocked: false,
    provider: 'Depósito de bebidas',
  },
  {
    type: ProductTypeEnum.BEVERAGE,
    code: 125,
    name: 'Agua',
    picture: '',
    price: 2,
    isBlocked: false,
    provider: 'Bebedouro',
  },
  {
    type: ProductTypeEnum.BEVERAGE,
    code: 126,
    name: 'Suco de laranja',
    picture: '',
    price: 2,
    isBlocked: false,
    provider: 'Bença',
  },
  {
    type: ProductTypeEnum.FOOD,
    code: 103,
    name: 'Dinossoba',
    picture: '',
    price: 10,
    isBlocked: true,
    ingredients: ['Soba', 'Óleo de gergelim', 'Carne', 'Frango', 'Cenoura', 'Repolho'],
  },
  {
    type: ProductTypeEnum.FOOD,
    code: 112,
    name: 'Coxinha',
    picture: '',
    price: 5,
    isBlocked: false,
    ingredients: ['Farinha de trigo', 'Frango desfiado', 'Batata', 'Pimenta'],
  },
  {
    type: ProductTypeEnum.FOOD,
    code: 113,
    name: 'Enroladinho',
    picture: '',
    price: 5,
    isBlocked: false,
    ingredients: ['Farinha de trigo', 'Presunto', 'Maionese', 'Salsicha'],
  },
  {
    type: ProductTypeEnum.FOOD,
    code: 114,
    name: 'Açai',
    picture: '',
    price: 20,
    isBlocked: false,
    ingredients: ['Açai', 'Guaraná em pó', 'Banana'],
  },
  {
    type: ProductTypeEnum.FOOD,
    code: 115,
    name: 'Brigadeiro',
    picture: '',
    price: 1,
    isBlocked: false,
    ingredients: ['Achocolatado', 'Manteiga', 'Leite condensado'],
  },
  {
    type: ProductTypeEnum.FOOD,
    code: 116,
    name: 'Beijinho',
    picture: '',
    price: 1,
    isBlocked: false,
    ingredients: ['Coco ralado', 'Manteiga', 'Leite condensado'],
  },
  {
    type: ProductTypeEnum.BEVERAGE,
    code: 120,
    name: 'Coca-cola',
    picture: '',
    price: 4,
    isBlocked: false,
    provider: 'Depósito de bebidas',
  },
  {
    type: ProductTypeEnum.BEVERAGE,
    code: 121,
    name: 'Pepsi',
    picture: '',
    price: 4,
    isBlocked: false,
    provider: 'Depósito de bebidas',
  },
  {
    type: ProductTypeEnum.BEVERAGE,
    code: 122,
    name: 'Guaraná',
    picture: '',
    price: 4,
    isBlocked: false,
    provider: 'Depósito de bebidas',
  },
  {
    type: ProductTypeEnum.BEVERAGE,
    code: 127,
    name: 'Dino suco',
    picture: '',
    price: 2,
    isBlocked: false,
    provider: 'Dino',
  },
]