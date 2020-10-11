import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    mode: string;
    product: Product;
    productForm: FormGroup;
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private productService: ProductService) { }

    ngOnInit(): void {

        this.activatedRoute.paramMap.subscribe(params => {
            const id = params.get('id');
            console.log('id ==', id);
            if (id === 'new') {
                this.mode = 'CREATE';
                this.product = new Product();
                this.createForm();
            } else {
                this.mode = 'VIEW';
                this.product = this.productService.getProduct(+id);
            }
        });
        this.createForm();
    }

    createForm() {
        this.productForm = new FormGroup({
            title: new FormControl(this.product.title),
            image_url: new FormControl(this.product.image_url),
            desc: new FormControl(this.product.desc),
            price: new FormControl(this.product.price),
            rating: new FormControl(this.product.rating),
            in_stock: new FormControl(this.product.in_stock),
            is_deleted: new FormControl(this.product.is_deleted),
            location_available: new FormControl(this.product.location_available),
            category: new FormControl(this.product.category)
        });
        if (this.mode === 'VIEW') {
            this.productForm.disable();
        }
    }

    edit() {
        this.mode = 'EDIT';
        this.productForm.enable();
    }

    submit() {
        if (this.product.product_id) {
            console.log('0000;', this.product);

            this.productService.updateProduct(this.product);
            this.mode = 'VIEW';
            this.productForm.disable();
        } else {
            this.productService.addProduct(this.product);
            this.router.navigate(['home']);
        }
    }
    cancel() {
        this.productForm.patchValue(this.product);
        if (this.product.product_id) {
            this.mode = 'VIEW';
            this.productForm.disable();
        }
    }
}


