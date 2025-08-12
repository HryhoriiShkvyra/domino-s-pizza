import { createSelector } from "@reduxjs/toolkit";

export const selectCartTotal = createSelector(
  [(state) => state.cart.cartItems],
  (cartItems) => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
);
