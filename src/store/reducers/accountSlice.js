import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  numberPhone: '',
};

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = accountSlice.actions;

export default accountSlice.reducer;
