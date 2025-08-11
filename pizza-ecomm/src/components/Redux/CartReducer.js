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
      console.log(action);
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
      } else if (sameIdDifferentSize) {
        state.cartItems.push(action.payload);
      } else {
        state.cartItems.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const findItemInCart = state.cartItems.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (findItemInCart) {
        findItemInCart.quantity++;
      } else return console.log("err");
    },

    decreaseQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!itemInCart) {
        return;
      }

      if (itemInCart.quantity === 1) {
        const itemIndex = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
        state.cartItems.splice(itemIndex, 1);
      } else {
        itemInCart.quantity--;
      }
    },

    removeItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex > -1) {
        state.cartItems.splice(itemIndex, 1);
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
