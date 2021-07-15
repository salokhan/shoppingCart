import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CustomerProductService } from './customer-product.service';
import { Store } from '@ngrx/store';
import * as Cart from './../store/actions';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-customer-products',
  templateUrl: './customer-products.component.html',
  styleUrls: ['./customer-products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerProductsComponent implements OnInit {



  numberOfPages = 0;
  totalRecords = 10000;
  pageSize = 8;
  skip = 0;
  page = 0;
  searchText = '';
  products: Observable<any[]>;

  constructor(public customerProductService: CustomerProductService, private readonly cdr: ChangeDetectorRef, private store: Store<any>) {
    this.products =  of([]);
    this.getProductsWithPagination()
  }

  ngOnInit(): void {
  }

  getProductsWithPagination() {
    this.products = this.customerProductService.getProductsWithPagination(this.page, this.pageSize,this.searchText);
    this.numberOfPages = this.totalRecords / this.pageSize;
  }

  addToCart(product: any) {
    this.store.dispatch(new Cart.AddProduct(product))
  }
  onPageChange(page: any) {
    this.page = page;
    this.getProductsWithPagination();
  }

}
