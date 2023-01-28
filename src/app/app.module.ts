import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppProduct } from './components/product/app-product.component';
import { AppProducts } from './components/products/app-products.component';
import { ProductRepository } from './data/productData/ProductRepossitory';
import { IRepository } from './contracts/IRepository';
import { PopupWindowComponent } from './components/popup-window/popup-window.component';
import { IProduct } from './contracts/IProduct';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
    declarations: [
        AppProduct,
        AppProducts,
        PopupWindowComponent      
    ],
    providers: [
      {
      provide: IRepository<IProduct>,
      useClass: ProductRepository
    }
    ],
    bootstrap: [AppProducts],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule
    ]
})
export class AppModule { }
