import { Injectable } from '@angular/core';
import { ProductUtilService } from '../utils/product-util.service';
import { Product } from '../../shared/models/product.model';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ProductService {

    private products: Product[];
    private productsSubject = new BehaviorSubject<Product[]>([]);

    products$ = this.productsSubject.asObservable();
    trashProducts$ = this.products$.pipe(map(products => products.filter(p => p.is_deleted)));

    constructor(private utilService: ProductUtilService) {
        this.products = this.utilService.getProductListFromLocalStorage();
        this.setProducts(this.products);
    }

    setProducts(products: Product[]) {
        this.products = products;
        this.productsSubject.next(products);
    }

    addProduct(product: Product) {
        console.log('product : ', product);

        this.setProducts([...this.products, product]);
        this.utilService.updateProducts(this.products);
    }

    getProduct(id) {
        console.log('id = ', id);

        console.log('this.products = ', this.products);

        const data = this.products.filter(e => e.product_id === id);
        console.log('data : ', data);

        if (data.length > 0) {
            return data[0];
        } else {
            return null;
        }
    }

    updateProduct(product: Product) {
        console.log('1111: ', product);

        let index = this.products.findIndex(p => p.product_id === product.product_id);
        console.log('index == ', index);

        if (index !== -1) {
            this.products[index] = product;
        }
        console.log('----> ', JSON.stringify(this.products));

        this.setProducts(this.products);
        this.utilService.updateProducts(this.products);
    }

    delete(product: Product) {
        console.log('delete product : ', JSON.stringify(product));

        let index = this.products.findIndex(p => p.product_id === product.product_id);
        if (this.products[index].is_deleted) {
            this.products.splice(index, 1);
        } else {
            this.products[index].is_deleted = true;
        }
        this.setProducts(this.products);
        this.utilService.updateProducts(this.products);
    }

}
