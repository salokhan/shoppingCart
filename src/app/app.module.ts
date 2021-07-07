import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerProductsComponent } from './customer-products/customer-products.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterProductsPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TotalBillPipe } from './pipes/totalBill.pipe';
import { cartReducer } from './store/cartReducer';

@NgModule({
  declarations: [
    AppComponent,
    CustomerProductsComponent,
    FilterProductsPipe,
    TotalBillPipe,
    CartComponent,
  ],
  imports: [
    NgbPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot({ cart: cartReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {

}
