import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // initialState: {
  //   items: [],
  // },
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
    // removeItem: (state, action) => {
    //   state.products = state.products.filter(5
    //     (item) => item.id !== action.payload
    //   );
    // },
    // resetCart: (state) => {
    //   state.products = [];
    // },
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      // const itemInCart = state.items.find((item) => {
      //   return (item.id === action.payload.id)
      // });
      // console.log(itemInCart)
      // if (itemInCart) {
      //   itemInCart.quantity+=1;
      // } else {
      //   state.items.push({ ...action.payload, quantity: 1 });
      // }
      // console.log(action.payload)
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
      // if (itemInCart) {
      //   itemInCart.quantity+=1;
      // }

      // const itemSize = state.items.find((item) => {
      //   return (item.size === action.payload.size)
      //   if (itemSize) {

      //   }
      // })
      // const itemId = state.items.find((item) => {
      //   return (item.id === action.payload.id)
      // });

      // if (itemId) {
      //   itemId.quantity+=1;
      // }
    },

    decreaseQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (itemInCart.quantity === 1) {
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (itemIndex > -1) {
          state.items.splice(itemIndex, 1);
        } else {
          itemIndex.quantity--;
        }
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
