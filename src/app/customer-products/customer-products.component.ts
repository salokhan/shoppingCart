import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CustomerProductService } from './customer-product.service';
import { Store } from '@ngrx/store';
import * as Cart from './../store/actions';


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
  products: any[] = [];

  constructor(private _customerProductService: CustomerProductService, private readonly cdr: ChangeDetectorRef, private store: Store<any>) { }

  ngOnInit(): void {
    this.getProductsWithPagination();
    this.numberOfPages = this.totalRecords / this.pageSize;
  }

  getProductsWithPagination() {
    this._customerProductService.getProductsWithPagination(this.page, this.pageSize).subscribe((data: any[]) => {
      if (data) {
        this.products = data;
        this.cdr.detectChanges();
      }
    },
      error => {
      });
  }

  searchProducts() {
    this._customerProductService.searchProducts(this.searchText).subscribe((data: any[]) => {
      if (data) {
        this.products = data;
        this.cdr.detectChanges();
      }
    },
      error => {
      });
  }

  addToCart(product: any) {
    this.store.dispatch(new Cart.AddProduct(product))


  }
  onPageChange(page: any) {
    this.page = page;
    this.getProductsWithPagination();
  }

  onSearchChange() {
    this.searchProducts();
  }

}
