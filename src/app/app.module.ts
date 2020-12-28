import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {PurchaseConfirmationModalComponent} from './products/product-detail/purchase-confirmation-modal/purchase-confirmation-modal.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ProductsComponent,
        ProductDetailComponent,
        PurchaseConfirmationModalComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [PurchaseConfirmationModalComponent]
})
export class AppModule {
}
