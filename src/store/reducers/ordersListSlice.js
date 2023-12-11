import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialStateAll } from './accountSlice';
import { changeListOrdersUser } from './statesSlice';
import { chnageAlertText, initialStateEdit } from './EditDataUser';

// Отправка заказа по списку
// http://kover-site.333.kg/create_zakaz_list/
export const sendOrderFoods = createAsyncThunk(
  'sendOrderFoods',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.post(
        'http://kover-site.333.kg/create_zakaz_list/',
        { ...data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status >= 200 || response.status < 300) {
        dispatch(
          changeDataListOrders({
            phone: '',
            fio: '',
            client_adress: '',
            client_time_delivery: '',
            oplata_type: 1,
            sdacha: '',
            comment_zakaz: '',
            product_list: [],
          })
        );
        dispatch(changeListOrdersUser([]));
        dispatch(
          chnageAlertText({
            text: 'Ваш заказ был успешно создан!!',
            backColor: 'green',
            state: true,
          })
        );
        dispatch(changePathSite(true));
      } else {
        dispatch(
          chnageAlertText({
            text: 'Упс! Что-то пошло не так... Повторите попытку позже!',
            backColor: 'red',
            state: true,
          })
        );
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Беру историю заказов
// http://kover-site.333.kg/history_zakaz get/
export const historyOrders = createAsyncThunk(
  'historyOrders',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      const response = await axios(
        `http://kover-site.333.kg/history_zakaz?codeid=${data}`
      );
      if (response.status >= 200 || response.status < 300) {
        console.log(response);
        // return response?.data?.establishment;
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

// Беру историю заказов
// http://kover-site.333.kg/history_zakaz get/
export const sendCourier = createAsyncThunk(
  'sendCourier',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.post(
        'http://kover-site.333.kg/create_zakaz_list/',
        { ...data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status >= 200 || response.status < 300) {
        // dispatch(
        //   changeDataListOrders({
        //     phone: '',
        //     fio: '',
        //     adress_from: '',
        //     apartment_address_from: '',
        //     time_from: '',
        //     adress_to: '',
        //     apartment_address_to: '',
        //     time_to: '',
        //     descr_delivery: '',
        //     gab_gruz: 0,
        //     sdacha: '',
        //     comment_zakaz: '',
        //     oplata_type: 1,
        //     dostavka_type: 1,
        //   })
        // );
        // dispatch(changeListOrdersUser([]));
        // dispatch(
        //   chnageAlertText({
        //     text: 'Ваша заяка была успешно отправлена!',
        //     backColor: 'green',
        //     state: true,
        //   })
        // );
        // dispatch(changePathSite(true));
      } else {
        dispatch(
          chnageAlertText({
            text: 'Упс! Что-то пошло не так... Повторите попытку позже!',
            backColor: 'red',
            state: true,
          })
        );
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
    }
  }
);

const initialState = {
  dataListOrders: {
    phone: '',
    fio: '',
    client_adress: '',
    client_time_delivery: '',
    oplata_type: 1,
    sdacha: '',
    comment_zakaz: '',
    product_list: [],
  },
  deliveryOrders: {
    phone: '',
    fio: '',
    adress_from: '',
    apartment_address_from: '',
    time_from: '',
    adress_to: '',
    apartment_address_to: '',
    time_to: '',
    descr_delivery: '',
    gab_gruz: 0,
    sdacha: '',
    comment_zakaz: '',
    oplata_type: 1,
    dostavka_type: 1,
  },
  pathSite: false,
  dataHistory: [],
};

const ordersListSlice = createSlice({
  name: 'ordersListSlice',
  initialState: { ...initialState, ...initialStateAll, ...initialStateEdit },
  extraReducers: (builder) => {
    //// sendOrderFoods
    builder.addCase(sendOrderFoods.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(sendOrderFoods.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(sendOrderFoods.pending, (state, action) => {
      state.loading = true;
    });
    //// historyOrders
    builder.addCase(historyOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.dataHistory = action.payload;
    });
    builder.addCase(historyOrders.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(historyOrders.pending, (state, action) => {
      state.loading = true;
    });
  },

  reducers: {
    changeDataListOrders: (state, action) => {
      state.dataListOrders = action.payload;
    },
    changeDeliveryOrders: (state, action) => {
      state.deliveryOrders = action.payload;
    },
    changePathSite: (state, action) => {
      state.pathSite = action.payload;
      setTimeout(() => {
        state.pathSite = false;
      }, 1000);
    },
  },
});
export const { changeDataListOrders, changeDeliveryOrders } =
  ordersListSlice.actions;

export default ordersListSlice.reducer;
