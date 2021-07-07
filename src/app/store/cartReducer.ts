// src/app/store/reducer.ts

import { CartActionTypes } from "./actions";

export let initialState: any = { cartItems: [], totalBill: 0 }

export function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      if (state.cartItems.find((x: any) => x.item.id === action.payload.id)) {
        let index: number = state.cartItems.findIndex((x: any) => x.item.id === action.payload.id)
        let DupItemAgg = state.cartItems.map((mic: any, i: number) => ({
          ...mic.cartItems, cartItems: i === index ? [{
            item: state.cartItems[i].item,
            count: state.cartItems[i].count + 1,
            totalAmount: state.cartItems[i].totalAmount + state.cartItems[i].item.price
          }] : [{

            item: state.cartItems[i].item,
            count: state.cartItems[i].count,
            totalAmount: state.cartItems[i].totalAmount
          }]

        }));
        const totalBill = DupItemAgg.map((mic: any) => ({ ...mic.cartItems[0] })).reduce((a: any, b: any) => +a + +b.totalAmount, 0)
        return { ...state.cartItems[index], cartItems: DupItemAgg.map((mic: any) => ({ ...mic.cartItems[0] })), totalBill: totalBill }
      } else {
        let totalBill = 0;
        if (state.cartItems.length == 0) {
          totalBill = action.payload.price;
        } else {
          totalBill = state.totalBill + action.payload.price;
        }
        return { ...state, cartItems: [...state.cartItems, { item: action.payload, count: 1, totalAmount: action.payload.price }], totalBill: totalBill }
      }
    case CartActionTypes.REMOVE_PRODUCT:
      let product = action.payload;
      let indexs = action.index;
      let removedProduct = state['cartItems'][indexs];
      //return state.filter((el, index)=>el == removedProduct && index === indexs)
      // return state.cartItems.filter((el: any, index: number) => index !== indexs);
      let newBill = state.totalBill - removedProduct.totalAmount;
      return { ...state, cartItems: state.cartItems.filter((el: any, index: number) => index !== indexs), totalBill: newBill }
    default:
      return state
  }
}



