import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// беру все данные
export const getAllDataGood = createAsyncThunk(
  "getAllDataGood",
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.get(
        "http://kover-site.333.kg/get_establishments/"
      );
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
  "getEstablishmentCategory",
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
      if (response.status >= 200 || response.status < 300) {
        return response?.data?.category?.recordset;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

// все заглавные категории(ресторан, магазин ....)
export const getCategory = createAsyncThunk(
  "getCategory",
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

// для примера
export const getExample = createAsyncThunk(
  "getExample",
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
  loading: true,
  allCategory: [],
  error: null,
};

const requestFoodSlice = createSlice({
  name: "requestFoodSlise",
  initialState,
  extraReducers: (builder) => {
    ///// getAllDataGood
    builder.addCase(getAllDataGood.fulfilled, (state, action) => {
      state.loading = false;
      state.allDataFood = action.payload;
    });
    builder.addCase(getAllDataGood.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllDataGood.pending, (state, action) => {
      state.loading = true;
    });

    ///// getEstablishmentCategory
    builder.addCase(getEstablishmentCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.establishmentCategory = [
        { category_name: "Все", codeid: 0 },
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
  },
});

export default requestFoodSlice.reducer;
