// src/app/store/actions.ts

import { Action } from '@ngrx/store'

export enum CartActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

export class AddProduct implements Action {
  readonly type = CartActionTypes.ADD_PRODUCT
  constructor(public payload: any) { }
}

export class RemoveProduct implements Action {
  readonly type = CartActionTypes.REMOVE_PRODUCT
  constructor(public payload: any, public index: number) { }
}

export type CartActions = AddProduct | RemoveProduct
