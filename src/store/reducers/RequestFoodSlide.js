import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { standartAxios } from '../../helpers/standartAxios';

export const getGood = createAsyncThunk(
  'getGood',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await fetch(
        'http://kover-site.333.kg/product/'
      );
      console.log(response);

      //   if (response.status === 200) {
      //     const records = await response.json();
      //     return records;
      //   } else {
      //     throw Error(`Error: ${response.status}`);
      //   }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally { 
    }
  }
);

const initialState = {
  pathOne: {
    link: '',
    title: '',
  },
};

const RequestFoodSlide = createSlice({
  name: 'RequestFoodSlide',
  initialState,
  reducers: {
    changePathOne: (state, action) => {
      state.pathOne = action.payload;
    },
  },
});
export const { changePathOne } = RequestFoodSlide.actions;

export default RequestFoodSlide.reducer;
