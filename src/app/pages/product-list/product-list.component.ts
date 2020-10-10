import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductUtilService } from '../../core/utils/product.util';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    products: Product[];
    savedProducts: Product[];
    ratingFilter = [1, 2, 3, 4, 5];
    productListForm: FormGroup;

    constructor(
        private productUtilService: ProductUtilService
    ) { }

    ngOnInit(): void {
        this.productUtilService.setProdcutListInLocalStorage();
        this.savedProducts = this.productUtilService.getProductListFromLocalStorage();
        this.products = JSON.parse(JSON.stringify(this.savedProducts));
    }

}
