import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartState = {
     items: Cardapio[];
     isOpenCart: boolean;
};

const initialState: CartState = {
     items: [],
     isOpenCart: false,
};

const cartSlice = createSlice({
     name: 'cart',
     initialState,
     reducers: {
          add: (state, action: PayloadAction<Cardapio>) => {
               state.items.push(action.payload);
          },
          remove: (state, action: PayloadAction<number>) => {
               state.items = state.items.filter(item => item.id !== action.payload);
          },

          openCart: state => {
               state.isOpenCart = true;
          },

          closeCart: state => {
               state.isOpenCart = false;
          },

          clearCart: state => {
               state.items = [];
          },
     },
});

export const { add, remove, openCart, closeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
