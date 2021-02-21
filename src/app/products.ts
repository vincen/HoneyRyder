// export const products = [
//   {
//     id: 0,
//     name: 'Phone XL',
//     price: 799,
//     description: 'A large phone with one of the best screens'
//   },
//   {
//     id: 1,
//     name: 'Phone Mini',
//     price: 699,
//     description: 'A great phone with one of the best cameras'
//   },
//   {
//     id: 2,
//     name: 'Phone Standard',
//     price: 299,
//     description: ''
//   }
// ];

import { Product } from "./model/product";

let p1: Product = new Product(0, 'Phone XL', 799, 'A large phone with one of the best screens');
let p2: Product = new Product(1, 'Phone Mini', 699, 'A great phone with one of the best cameras');
let p3: Product = new Product(2, 'Phone Standard', 299, '');

export const products: Array<Product> = [p1, p2, p3];

