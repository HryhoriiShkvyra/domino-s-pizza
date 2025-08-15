import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    handleAddToCartAndIncreaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      const sameIdDifferentSize = state.cartItems.find(
        (item) =>
          item.id === action.payload.id && item.size !== action.payload.size
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        state.cartTotalQuantity++;
      } else if (sameIdDifferentSize) {
        state.cartItems.push(action.payload);
        state.cartTotalQuantity++;
      } else {
        state.cartItems.push(action.payload);
        state.cartTotalQuantity++;
      }
    },

    increaseQuantity: (state, action) => {
      const findItemInCart = state.cartItems.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (findItemInCart) {
        findItemInCart.quantity++;
        state.cartTotalQuantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.price === action.payload.price
      );

      if (itemIndex === -1) {
        return;
      }

      const findItemInCart = state.cartItems[itemIndex];

      if (findItemInCart.quantity === 1) {
        state.cartItems.splice(itemIndex, 1);
        state.cartTotalQuantity--;
      } else {
        findItemInCart.quantity -= 1;
        state.cartTotalQuantity--;
      }
    },

    removeItem: (state, action) => {
      const findItemInCart = state.cartItems.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (findItemInCart) {
        state.cartTotalQuantity -= action.payload.quantity;
        state.cartItems.splice(findItemInCart, 1);
      }
    },
  },
});

export const {
  handleAddToCartAndIncreaseQuantity,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
