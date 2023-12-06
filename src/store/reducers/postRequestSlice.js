import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// хз что это
// http://kover-site.333.kg/products c body ()
export const getEveryInnerData = createAsyncThunk(
  'getEveryInnerData',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      //   const aa = {
      //     code_establishment: data?.category,
      //     code_category: data?.establishment,
      //   };
      //   const aa = {
      //     code_establishment: 5,
      //     code_category: 19,
      //   };
      const response = await axios.post('http://kover-site.333.kg/products', {
        code_establishment: 5,
        code_category: 19,
      });
      //   console.log(response?.data?.product?.[0]?.estab, 'response');
      //   console.log(response?.data?.product, 'nurdin');
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
