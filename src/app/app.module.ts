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
import { ErrorComponent } from './components/error/error.component';
import { PageComponent } from './components/page/page.component';
import { AppComponent } from './components/app/app.component';
import { IErrorHandler } from './contracts/IErrorHandler';
import { UserShownErrorHandler } from './services/user-shown.error.handler';
import { IError } from './contracts/IError';
import { ErrorService } from './services/error.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppProduct,
        AppProducts,
        PopupWindowComponent,
        ErrorComponent,
        PageComponent,
        AppComponent      
    ],
    providers: [   
         ErrorService, 
        {
            provide: IErrorHandler<IError>,
            useClass: UserShownErrorHandler
        },       
        {
            provide: IRepository<IProduct>,
            useClass: ProductRepository
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }
