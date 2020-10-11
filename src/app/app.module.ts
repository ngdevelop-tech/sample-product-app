import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductTrashComponent } from './pages/product-trash/product-trash.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ProductListComponent,
        ProductComponent,
        ProductDetailsComponent,
        ProductTrashComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
