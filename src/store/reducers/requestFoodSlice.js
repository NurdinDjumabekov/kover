import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// беру все данные
export const getAllDataFood = createAsyncThunk(
  'getAllDataFood',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.establishment;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

// виды учреждений(нац кухня ....)
export const getEstablishmentCategory = createAsyncThunk(
  'getEstablishmentCategory',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.category;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

// беру сортированные данные по учреждениям
export const getEstablishmentData = createAsyncThunk(
  'getEstablishmentData',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.establishment;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

// типы (магаз, рестораны, аптеки ...)
export const getCategory = createAsyncThunk(
  'getCategory',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.category;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

// типы (магаз, рестораны, аптеки ...)
export const getEveryData = createAsyncThunk(
  'getEveryData',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.product;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

// для примера
export const getExample = createAsyncThunk(
  'getExample',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      // const response = await axios.get(
      //   'http://kover-site.333.kg/get_estab_category'
      // );
      // console.log(response);
      // if (response.status >= 200 || response.status < 300) {
      //   return response?.data?.establishment;
      // } else {
      //   throw Error(`Error: ${response.status}`);
      // }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

const initialState = {
  allDataFood: [],
  establishmentCategory: [],
  allCategory: [],
  everyData: {},
  loading: true,
  error: null,
};

const requestFoodSlice = createSlice({
  name: 'requestFoodSlice',
  initialState,
  extraReducers: (builder) => {
    ///// getAllDataFood
    builder.addCase(getAllDataFood.fulfilled, (state, action) => {
      state.loading = false;
      state.allDataFood = action.payload;
    });
    builder.addCase(getAllDataFood.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllDataFood.pending, (state, action) => {
      state.loading = true;
    });

    ///// getEstablishmentData
    builder.addCase(getEstablishmentCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.establishmentCategory = [
        { category_name: 'Все', codeid: 0 },
        ...action.payload,
      ];
    });
    builder.addCase(getEstablishmentCategory.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getEstablishmentCategory.pending, (state, action) => {
      state.loading = true;
    });
    ///// getCategory
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.allCategory = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategory.pending, (state, action) => {
      state.loading = true;
    });
    ////////getEstablishmentData
    builder.addCase(getEstablishmentData.fulfilled, (state, action) => {
      state.loading = false;
      state.allDataFood = action.payload;
    });
    builder.addCase(getEstablishmentData.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getEstablishmentData.pending, (state, action) => {
      state.loading = true;
    });
    ///////////getEveryData
    builder.addCase(getEveryData.fulfilled, (state, action) => {
      state.loading = false;
      state.everyData = action.payload;
    });
    builder.addCase(getEveryData.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getEveryData.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default requestFoodSlice.reducer;
