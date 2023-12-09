import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Редактирование имени пользователя
// http://kover-site.333.kg/edit_profile/
export const editNameUser = createAsyncThunk(
  'editNameUser',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.post(
        'http://kover-site.333.kg/edit_profile/',
        { ...info },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status >= 200 || response.status < 300) {
        dispatch(resetBusket());
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  editDataUser: '',
  enter: false,
};

const EditDataUser = createSlice({
  name: 'EditDataUser',
  initialState,
  extraReducers: (builder) => {
    // //// checkNum
    // builder.addCase(checkNum.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.checkAuth = action.payload;
    // });
    // builder.addCase(checkNum.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.loading = false;
    // });
    // builder.addCase(checkNum.pending, (state, action) => {
    //   state.loading = true;
    // });
  },
  reducers: {
    changeOrderUser: (state, action) => {
      state.orderUser = action.payload;
    },
  },
});

export const { changeOrderUser } = EditDataUser.actions;

export default EditDataUser.reducer;
