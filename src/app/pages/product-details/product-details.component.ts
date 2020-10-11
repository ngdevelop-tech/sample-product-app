import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest } from 'rxjs';
import { AddEditProductDialogComponent } from 'src/app/components/dialog/add-edit-product-dialog/add-edit-product-dialog.component';
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
        private modalService: BsModalService,
        private productService: ProductService) { }

    ngOnInit(): void {

        combineLatest([this.activatedRoute.paramMap, this.productService.refresh$]).subscribe(([params, refresh]) => {
            const id = params.get('id');
            this.product = this.productService.getProduct(+id);
        });
    }

    openAddProductModal(){
        this.modalService.show(AddEditProductDialogComponent, {class: 'modal-lg', ignoreBackdropClick: true, initialState: {product: this.product}});

    }
}


