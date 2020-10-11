import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
        private router: Router) { }

    ngOnInit(): void {

        this.activatedRoute.paramMap.subscribe(params => {
            const id = params.get('id');
            console.log('id ==', id);

            // if (id === 'CREATE') {
            //     this.mode = 'CREATE';
            //     this.createForm();
            // } else {
            //     this.mode = 'VIEW';

            // }
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
            is_deleted: new FormControl(this.product.is_deleted)
        });
        // if (this.mode === 'VIEW') {
        //     this.productForm.disable();
        // }
    }

    edit() {
        this.mode = 'EDIT';
        this.productForm.enable();
    }

    submit() {
        if (this.product.product_id) {
            //   this.appService.editProject(this.project.id, this.projectForm.value).subscribe(response => {
            //     this.mode = 'VIEW';
            //     this.project = { ...this.project, ...this.projectForm.value };
            //     this.projectForm.disable();
            //   });
        } else {
            //   this.appService.createProject(this.projectForm.value).subscribe(response => {
            //     this.router.navigate(['/projects']);
            //   });
        }
    }
    cancel() {
        // this.projectForm.patchValue(this.project);
        // if (this.project.id) {
        //   this.mode = 'VIEW';
        //   this.projectForm.disable();
    }
}


