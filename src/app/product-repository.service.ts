import { Injectable } from '@angular/core';
import { Category, Product, Rating } from './shared/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductRepository {
  products: Product[] = [{
    id: '1',
    name: 'Хліб',
    price: 10,
    category: Category.Category1,
    description: 'Lorem ipsum dolor sit amet',
    inStock: true,
    rating: Rating.Good,
    selected: false,
    },
    {
    id: '2',
    name: 'Цегла',
    price: 50,
    category: Category.Category3,
    description: 'Lorem ipsum dolor sit amet',
    inStock: false,
    rating: Rating.NotBad,
    selected: false,
    },
    {
    id: '3',
    name: 'Чашка',
    price: 40,
    category: Category.Category2,
    description: 'Lorem ipsum dolor sit amet',
    inStock: true,
    rating: Rating.NotBad,
    selected: false,
    },
  ]

  public getProducts(): Product[] {
    return this.products;
  }

  constructor() { }
}
