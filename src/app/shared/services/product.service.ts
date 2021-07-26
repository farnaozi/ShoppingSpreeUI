import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: "Piqué Biker Jacket",
      price: 15,
      salePrice: 5,
      reviews: [],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['Black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 2,
      name: "Piqué Biker Jacket",
      price: 15,
      reviews: [],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['Black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 3,
      name: "Piqué Biker Jacket",
      price: 15,
      reviews: [],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['#5E64D1', '#404A47', '#D5A667'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 4,
      name: "Piqué Biker Jacket",
      price: 15,
      salePrice: 5,
      reviews: [],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['Black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 5,
      name: "Piqué Biker Jacket",
      price: 15,
      salePrice: 5,
      reviews: [],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['Black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 6,
      name: "Piqué Biker Jacket",
      price: 15,
      reviews: [],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['Black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    }
  ];

  getProducts() {
    return this.createObservable(this.products);
  }

  getProductById(id: number) {
    return this.createObservable(this.products)
      .pipe(map(products => products.find(product => product.id == id)));
  }

  updateProductById(id: number, product: Product) {
    return this.createObservable(this.products)
      .pipe(tap(products => {
        let index = products.findIndex(product => product.id == id);
        this.products[index] = product;
      }));
  }

  saveProduct(product: Product) {
    return this.createObservable(this.products)
      .pipe(tap(products => {
        products.push({ ...product });
      }));
  }

  createObservable(data: Product[]) {
    return of(data)
  }
}
