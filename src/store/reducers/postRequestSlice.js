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

// Отправка заказа
// http://kover-site.333.kg/create_zakaz/
export const sendOrderFoods = createAsyncThunk(
  'sendOrderFoods',
  async function (info, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.post(
        'http://kover-site.333.kg/create_zakaz/',
        {...info,},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
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
    phone: '+996700754454',
    fio: 'nurdin',
    address: 'nurdin',
    kvartira: 'nurdin',
    hourDeliver: 'nurdin',
    dop: 'nurdin',
    type_oplata: 1,
    sdacha: 'nurdin',
    comment_zakaz: 'nurdin',
    summ: 'nurdin',
    product_list: [],
  },
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
    changeTypeOrder: (state, action) => {
      state.orderUser = { ...state.orderUser, type_oplata: action.payload };
    },
  },
});

export const { changeOrderUser, changeTypeOrder } = postRequestSlice.actions;

export default postRequestSlice.reducer;
