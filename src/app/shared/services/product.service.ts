import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { ProductsFilters } from '../models/products-filters.model';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public productsFiltered = new Subject();
  products: Product[] = [
    {
      id: 1,
      name: "Lorem Ipsum",
      category: 'bags',
      price: 15,
      salePrice: 5,
      reviews: [{
        reviewer: 'Lorem ipsum',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est ',
        rating: 3.5
      },
      {
        reviewer: 'Lorem ipsum',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est ',
        rating: 5
      },
      {
        reviewer: 'Lorem ipsum',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est ',
        rating: 4
      },
      {
        reviewer: 'Lorem ipsum',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est ',
        rating: 4
      },
      {
        reviewer: 'Lorem ipsum',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est ',
        rating: 2
      }
    ],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      category: 'bags',
      price: 15,
      reviews: [],
      salePrice: 5,
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      category: 'bags',
      price: 15,
      reviews: [],
      sizes: ['XXL',  'L', 'S'],
      colors: ['#5E64D1', '#404A47', '#D5A667'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 4,
      name: "Lorem Ipsum",
      category: 'wallets',
      price: 15,
      salePrice: 5,
      reviews: [],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 5,
      name: "Lorem Ipsum",
      category: 'wallets',
      price: 15,
      salePrice: 5,
      reviews: [],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    },
    {
      id: 6,
      name: "Lorem Ipsum",
      category: 'bracelets',
      price: 15,
      reviews: [],
      sizes: ['XXL', 'XL', 'L', 'S'],
      colors: ['black'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est quo! Repudiandae ab, qui vero nihil molestias dignissimos dolorem ex excepturi culpa modi illum doloribus iure optio. Sunt, eaque enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque dolor! Repudiandae facilis eveniet a quibusdam placeat fugiat, eligendi saepe explicabo et, quidem officiis quis adipisci vel accusantium, numquam nihil?'
    }
  ];
  loader:boolean = true;
  public productsFilters: ProductsFilters = {
    category: 'all',
    sizes: [],
    colors: [],
    review: 0,
    startPrice: 0,
    endPrice: 10000
  };

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  getProducts() {
    return this.createObservable(this.products)
  }

  getFilteredProducts() {
    return this.createObservable(this.products).pipe(
      map(products => {
        let tempProducts = [];
        if(this.productsFilters.category == 'all'){
          tempProducts = [...products];
        }
        else{
          tempProducts
          = [...products.filter(product =>
            product.category == this.productsFilters.category)];
        }

        if (this.productsFilters.colors.length != 0) {
  
          let temp = [];
          for (let product of tempProducts) {
            for (let color of this.productsFilters.colors)
              if (product.colors.find(c => c == color) != undefined) {
                temp.push({ ...product })
                break;
              }
          }

          tempProducts = [...temp];
        }

        if (this.productsFilters.sizes.length != 0) {
          debugger;
          let temp = [];
          for (let product of tempProducts) {
            for (let size of this.productsFilters.sizes)
              if (product.sizes.find(s => s == size) != undefined) {
                temp.push({ ...product })
                break;
              }
          }

          tempProducts = [...temp];
        }

        tempProducts = [...tempProducts.filter(product =>
          this.ratingCalculator(product.reviews) >= this.productsFilters.review)]

        tempProducts = [...tempProducts.filter(product =>
          product.salePrice != undefined ?
            product.salePrice >= this.productsFilters.startPrice
            && product.salePrice <= this.productsFilters.endPrice
            : product.price >= this.productsFilters.startPrice
            && product.price <= this.productsFilters.endPrice)]

        return tempProducts;

      }));;
  }

  private ratingCalculator(reviews: any[]) {
    if (reviews.length != 0) {
      let sum = 0;
      reviews!.forEach(rev => sum += rev.rating);
      return sum / reviews.length!;
    }

    return 0;
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

  createCartItem(product: Product, quantity: number,
    selectedColor?: string, selectedSize?: string): CartItem {
    let cartItem: CartItem = {
      quantity: quantity,
      size: selectedSize == undefined ? product.sizes[0] : selectedSize,
      color: selectedColor == undefined ? product.colors[0] : selectedColor,
      product: product
    }
    return cartItem;
  }

  addToCart(product: Product, quantity: number,
    selectedColor?: string, selectedSize?: string) {
    this.shoppingCartService.saveCartItem(this.createCartItem(product, quantity,
      selectedColor, selectedSize));
  }

  createObservable(data: Product[]) {
    return of(data)
  }
}
