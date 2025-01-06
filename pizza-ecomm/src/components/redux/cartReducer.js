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

    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },

    increaseQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      console.log(action.payload);
      console.log(itemInCart);
      console.log(
        "here i must add another count for quantity for each size of product"
      );
    },

    decreaseQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!itemInCart) {
        return; // Exit if item not found
      }

      if (itemInCart.quantity === 1) {
        // Remove item if quantity will become 0
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cartItems.splice(itemIndex, 1);
      } else {
        // Decrease quantity if more than 1
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
