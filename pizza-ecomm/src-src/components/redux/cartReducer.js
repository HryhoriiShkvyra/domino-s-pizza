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
      console.log(itemInCart)
      // if (itemInCart) {
      //   itemInCart.quantity+=1;
      // } else {
      //   state.items.push({ ...action.payload, quantity: 1 });
      // }
      console.log(action.payload)
    },

    increaseQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => {
        return (item.id === action.payload.id)
      });
      console.log(action.payload)
      console.log(itemInCart)
      console.log('here i must add another count for quantity for each size of product')
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