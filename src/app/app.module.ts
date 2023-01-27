import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppProduct } from './components/product/app-product.component';
import { AppProducts } from './components/product/app-products.component';
import { ProductRepository } from './data/productData/ProductRepossitory';

@NgModule({
  declarations: [   
    AppProduct,
    AppProducts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ProductRepository],
  bootstrap: [AppProducts]
})
export class AppModule { }
