import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { PRODUCT_LIST } from '../initial-data';

@Injectable({ providedIn: 'root' })
export class ProductUtilService {

    constructor() {
        this.initializeStorage();
     }

    initializeStorage() {
        localStorage.setItem('products', JSON.stringify(PRODUCT_LIST));
    }
    updateProducts(products: Product[]) {
        localStorage.setItem('products', JSON.stringify(PRODUCT_LIST));
    }

    getProductListFromLocalStorage() {
        return JSON.parse(localStorage.getItem('products'));
    }

}
