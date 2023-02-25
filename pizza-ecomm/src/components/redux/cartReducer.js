// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: { items: [] },
//   reducers: {
//     addItem: (state, action) => {
//       const { id, name, price } = action.payload;
//       const itemIndex = state.items.findIndex(item => item.id === id);
//       if (itemIndex === -1) {
//         state.items.push({ id, name, price, quantity: 1 });
//       } else {
//         state.items[itemIndex].quantity += 1;
//       }
//     },
//     removeItem: (state, action) => {
//       const { id } = action.payload;
//       const itemIndex = state.items.findIndex(item => item.id === id);
//       if (itemIndex !== -1) {
//         const item = state.items[itemIndex];
//         if (item.quantity === 1) {
//           state.items.splice(itemIndex, 1);
//         } else {
//           item.quantity -= 1;
//         }
//       }
//     },
//     increaseQuantity: (state, action) => {
//       const { id } = action.payload;
//       const item = state.items.find(item => item.id === id);
//       if (item) {
//         item.quantity += 1;
//       }
//     },
//     decreaseQuantity: (state, action) => {
//       const { id } = action.payload;
//       const item = state.items.find(item => item.id === id);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     }
//   }
// });

// export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
// export default cartSlice.reducer;



import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.products.find((item) => item.id === action.payload.id)
      if(itemInCart) {
        itemInCart.quantity++
      } else {
        state.products.push({...action.payload, quantity: 1});
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.products.find((item) => item.id === action.payload.id)
      if(itemInCart) {
        itemInCart.quantity++
      }
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.products.find((item) => item.id === action.payload.id)
      if(itemInCart) {
        itemInCart.quantity--
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload)
    },
  },
})

export const { 
  addToCart, 
  incrementQuantity, 
  decrementQuantity, 
  removeItem
} = cartSlice.actions

export default cartSlice.reducer