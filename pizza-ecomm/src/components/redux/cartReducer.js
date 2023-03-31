import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemInCart = state.items.find((item) => {
        return (item.id === action.payload.id)
      });
      if (itemInCart) {
        itemInCart.quantity+=1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const itemsInCart = state.items.find((item) => {
        return (item.id === action.payload.id)
      });
      if (itemsInCart) {
        itemsInCart.quantity+=1;
      }
    },

    decreaseQuantity: (state,action) => {
      
      const itemInCart = state.items.find((item) => {
        return (item.id === action.payload.id)  
      })
      if (itemInCart.quantity === 1) {
        const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
        if (itemIndex > -1){
          state.items.splice(itemIndex, 1)
        } else {
          itemIndex.quantity--
        }
      } else {
        itemInCart.quantity--
      }
    } ,
    
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
      if (itemIndex > -1){
        state.items.splice(itemIndex, 1)
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;