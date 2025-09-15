import { createSlice } from '@reduxjs/toolkit';

type PaymentState = {
     isOpenPayment: boolean;
};

const initialState: PaymentState = {
     isOpenPayment: false,
};

const paymentSlice = createSlice({
     name: 'payment',
     initialState,
     reducers: {
          openPayment: state => {
               state.isOpenPayment = true;
          },

          closePayment: state => {
               state.isOpenPayment = false;
          },
     },
});

export const { openPayment, closePayment } = paymentSlice.actions;
export default paymentSlice.reducer;
