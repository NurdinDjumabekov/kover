import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Заказ еды
// http://...
export const postSendOrder = createAsyncThunk(
  'postSendOrder',
  async function (api, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(api);
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

// Отправка еды
// http://...
export const sendOrderFoods = createAsyncThunk(
  'sendOrderFoods',
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios({
        method: 'POST',
        url: '',
        data: {
          info,
        },
      });

      if (response.status >= 200 || response.status < 300) {
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  orderUser: {
    phone: '',
    fio: '',
    zakaz_from_address: '',
    zakaz_to_address: '',
    zakaz_to_address_dop: '',
    zakaz_comment: '',
    sdacha: '',
    dostavka: '', /// что?
    summ: '',
    check_dostavka: '',
    type_oplata: '', /// что?
    type_zakaz: '', /// что?
    estab: '',
    product: '',
  },
  priceOrder: 0,
  dishesPrice: 0,
  delivery: 0, // брать у бэка
  errorOrderFood: false,
  loadingOrder: false,
  goodSendOrder: false,
};

const postRequestSlice = createSlice({
  name: 'postRequestSlice',
  initialState,
  extraReducers: (builder) => {
    //// postSendOrder
    builder.addCase(postSendOrder.fulfilled, (state, action) => {
      state.loading = false;
      // state.allDataFood = action.payload;
    });
    builder.addCase(postSendOrder.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(postSendOrder.pending, (state, action) => {
      state.loading = true;
    });
    //// sendOrderFoods
    builder.addCase(sendOrderFoods.fulfilled, (state, action) => {
      // state.allDataFood = action.payload;
      state.loadingOrder = false;
      state.goodSendOrder = true;
      setTimeout(() => {
        state.goodSendOrder = false;
      }, 3000);
    });
    builder.addCase(sendOrderFoods.rejected, (state, action) => {
      state.error = action.payload;
      state.loadingOrder = false;
      state.errorOrderFood = true;
      setTimeout(() => {
        state.errorOrderFood = false;
      }, 3000);
    });
    builder.addCase(sendOrderFoods.pending, (state, action) => {
      state.loadingOrder = true;
    });
  },
  reducers: {
    changeOrderUser: (state, action) => {
      state.orderUser = action.payload;
    },
  },
});

export const { changeOrderUser } = postRequestSlice.actions;

export default postRequestSlice.reducer;
