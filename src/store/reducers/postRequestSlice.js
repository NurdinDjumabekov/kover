import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// беру каждый продукт определенного учреждения
// http://kover-site.333.kg/products
export const getEveryInnerData = createAsyncThunk(
  'getEveryInnerData',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.post('http://kover-site.333.kg/products', {
        code_establishment: data?.establishment,
        code_category: data?.category,
      });
      console.log(response, 'response');
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.product?.[0]?.estab;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchInnerFood = createAsyncThunk(
  'searchInnerFood',
  async function (search, { dispatch, rejectWithValue }) {
    try {
      console.log(search);
      // const response = await axios.post('http://kover-site.333.kg/products', {
      //   code_establishment: data?.establishment,
      //   code_category: data?.category,
      // });
      // console.log(response, 'response');
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.product?.[0]?.estab;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  innerData: [],
};

const postRequestSlice = createSlice({
  name: 'postRequestSlice',
  initialState,
  extraReducers: (builder) => {
    ///// getEveryInnerData
    builder.addCase(getEveryInnerData.fulfilled, (state, action) => {
      state.loading = false;
      state.innerData = action.payload;
    });
    builder.addCase(getEveryInnerData.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getEveryInnerData.pending, (state, action) => {
      state.loading = true;
    });
  },
  //   reducers: {
  //     sortDataPopular: (state, action) => {
  //       if (action.payload === 'Все') {
  //         return;
  //       } else {
  //         const sortedData = state.allDataFood.slice().sort((a, b) => {
  //           if (a.status === action.payload && b.status !== action.payload) {
  //             return -1; // Перемещаем 'популярные' в начало
  //           } else if (
  //             a.status !== action.payload &&
  //             b.status === action.payload
  //           ) {
  //             return 1; // Перемещаем 'популярные' в начало
  //           }
  //         });
  //         state.allDataFood = sortedData;
  //       }
  //     },
  //   },
});

// export const { sortDataPopular } = postRequestSlice.actions;

export default postRequestSlice.reducer;
