import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @Input() product: Product;
    @Input() trashView: boolean;
    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
    }
    restore(product) {
        this.product.is_deleted = false;
        this.productService.updateProduct(product);

    }
    remove(product) {
        this.productService.delete(product);
    }

}
