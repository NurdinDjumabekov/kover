import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// беру все данные
// http://kover-site.333.kg/get_establishments/
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
// http://kover-site.333.kg/get_estab_category?category_type=filter
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

// типы (магаз, рестораны, аптеки ...)
// http://kover-site.333.kg/get_estab_category?category_type=main
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

// беру сортированные данные по учреждениям
// http://kover-site.333.kg/get_establishments?category_code=${id}
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

// каждое учреждение
// http://kover-site.333.kg/get_establishments/${id}
export const getEveryData = createAsyncThunk(
  'getEveryData',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
      // console.log(response?.data?.establishment);
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

// учреждение(магазины, рестораны ...), внутренние типы каждого учреждения
// http://kover-site.333.kg/get_product_categ_estab?estab_code=${id}
export const getEveryInnerTypes = createAsyncThunk(
  'getEveryInnerTypes',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.product_category;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

// учреждение(магазины, рестораны ...), внутренние данные каждого учреждения
// http://kover-site.333.kg/get_discount?code_category=1
export const getDiscounts = createAsyncThunk(
  'getDiscounts',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.discount;
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
  everyInnerTypes: [],
  discounts: [],
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
    ///////////getEveryInnerTypes
    builder.addCase(getEveryInnerTypes.fulfilled, (state, action) => {
      state.loading = false;
      state.everyInnerTypes = [
        { category_name: 'Все', codeid: 0 },
        ...action.payload,
      ];
    });

    builder.addCase(getEveryInnerTypes.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getEveryInnerTypes.pending, (state, action) => {
      state.loading = true;
    });
    ///////////getDiscounts
    builder.addCase(getDiscounts.fulfilled, (state, action) => {
      state.loading = false;
      state.discounts = action.payload;
    });
    builder.addCase(getDiscounts.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getDiscounts.pending, (state, action) => {
      state.loading = true;
    });
  },
  reducers: {
    sortDataPopular: (state, action) => {
      if (action.payload === 'Все') {
        return;
      } else {
        const sortedData = state.allDataFood.slice().sort((a, b) => {
          if (a.status === action.payload && b.status !== action.payload) {
            return -1; // Перемещаем 'популярные' в начало
          } else if (
            a.status !== action.payload &&
            b.status === action.payload
          ) {
            return 1; // Перемещаем 'популярные' в начало
          }
        });
        state.allDataFood = sortedData;
      }
    },
  },
});

export const { sortDataPopular } = requestFoodSlice.actions;

export default requestFoodSlice.reducer;
