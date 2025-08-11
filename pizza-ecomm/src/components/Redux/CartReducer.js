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
        state.cartTotalAmount += action.payload.price;

        state.cartTotalQuantity++;
      } else if (sameIdDifferentSize) {
        state.cartItems.push(action.payload);
        state.cartTotalAmount += action.payload.price;
        state.cartTotalQuantity++;
      } else {
        state.cartItems.push(action.payload);
        state.cartTotalAmount += action.payload.price;
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
        state.cartTotalAmount += action.payload.price;
        state.cartTotalQuantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      const findItemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!findItemInCart) {
        return;
      }

      if (findItemInCart.quantity === 1) {
        const findItemInCart = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
        state.cartTotalQuantity--;
        state.cartItems.splice(findItemInCart, 1);
      } else {
        state.cartTotalQuantity--;
        findItemInCart.quantity--;
      }
    },

    removeItem: (state, action) => {
      const findItemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
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
