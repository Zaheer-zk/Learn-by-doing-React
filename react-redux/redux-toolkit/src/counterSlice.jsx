import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState: 0, // Initial state
  reducers: {
    increment: (state, action) => state + 1, // action.payload
    decrement: (state, action) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
