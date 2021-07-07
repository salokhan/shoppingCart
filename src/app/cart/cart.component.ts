import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable,  Subscription } from 'rxjs';
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  totalBillStoreSubsriber: Subscription;
  cart: any;
  cartItems: any;
  totalBill: any;
  totalBillStore: any;
  constructor(private store: Store<any>) {
    this.cart = this.store.select('cart');
    this.cartItems = this.cart.select('cartItems')
    this.totalBillStore = this.cart.select('totalBill')

   this.totalBillStoreSubsriber =  this.totalBillStore.subscribe((totalBill: any) => {
      this.totalBill = totalBill;
    })
  }

  ngOnInit() { }

  removeFromCart(product: any, i: number) {
    this.store.dispatch(new Cart.RemoveProduct(product, i))
  }
  clickit() {
    console.log(';sas')
  }

  ngOnDestroy(){
    this.totalBillStoreSubsriber.unsubscribe();
  }

}
