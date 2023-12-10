import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  changeDataUser,
  changeTokenName,
  changeTokenNum,
  initialStateAll,
} from './accountSlice';

// Редактирование имени пользователя
// http://kover-site.333.kg/edit_profile/
export const editNameUser = createAsyncThunk(
  'editNameUser',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.post(
        'http://kover-site.333.kg/edit_profile/',
        {
          codeid: data?.dataUser?.idUser,
          client_fio: data?.inputName,
          client_phone: '',
          client_phone2: '',
          address: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status >= 200 || response.status < 300) {
        dispatch(changeDataUser({ ...data?.dataUser, name: data?.inputName }));
        dispatch(changeTokenName(data?.inputName));
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Редактирование номера пользователя
// http://kover-site.333.kg/edit_profile/
export const editNumUser = createAsyncThunk(
  'editNumUser',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.post(
        'http://kover-site.333.kg/edit_profile/',
        {
          codeid: data?.dataUser?.idUser,
          client_fio: '',
          client_phone: data?.tokenNum,
          client_phone2: data?.inputNum,
          address: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Подтверждение номера пользователя
// http://kover-site.333.kg/edit_profile/
export const checkNumUser = createAsyncThunk(
  'checkNumUser',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.post(
        // 'http://kover-site.333.kg/edit_profile/',
        {
          // codeid: data?.dataUser?.idUser,
          // client_fio: '',
          // client_phone: data?.tokenNum,
          // client_phone2: data?.inputNum,
          // address: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status >= 200 || response.status < 300) {
        // dispatch(
        //   changeDataUser({ ...data?.dataUser, numberPhone: data?.inputNum })
        // );
        // dispatch(changeTokenNum(data?.inputNum));
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Редактирование адреса пользователя
// http://kover-site.333.kg/edit_profile/
export const editPlaceUser = createAsyncThunk(
  'editPlaceUser',
  async function (data, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.post(
        'http://kover-site.333.kg/edit_profile/',
        {
          codeid: '',
          client_fio: '',
          client_phone: '',
          client_phone2: '',
          address: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status >= 200 || response.status < 300) {
        // dispatch(changeDataUser({ ...data?.dataUser, name: data?.input }));
        // dispatch(changeTokenName(data?.input));
      } else {
        throw Error(`Error: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  alertText: {
    text: '',
    backColor: '',
    state: false,
  },
};

const EditDataUser = createSlice({
  name: 'EditDataUser',
  initialState: { ...initialState, ...initialStateAll },
  extraReducers: (builder) => {
    //// editNameUser
    builder.addCase(editNameUser.fulfilled, (state, action) => {
      state.loading = false;
      state.alertText = {
        text: 'Ваше ФИО успешно переименовано!',
        backColor: 'green',
        state: true,
      };
    });
    builder.addCase(editNameUser.rejected, (state, action) => {
      state.error = action.payload;
      state.alertText = {
        text: 'Не удалось изменить ваше ФИО, попробуйте позже...',
        backColor: 'red',
        state: true,
      };
      state.loading = false;
    });
    builder.addCase(editNameUser.pending, (state, action) => {
      state.loading = true;
    });
    ////// editNumUser
    builder.addCase(editNumUser.fulfilled, (state, action) => {
      state.loading = false;
      // state.alertText = {
      //   text: 'Ваш номер успешно переименован!',
      //   backColor: 'green',
      //   state: true,
      // };
    });
    builder.addCase(editNumUser.rejected, (state, action) => {
      state.error = action.payload;
      state.alertText = {
        text: 'Не удалось изменить номер, попробуйте еще раз...',
        backColor: 'red',
        state: true,
      };
      state.loading = false;
    });
    builder.addCase(editNumUser.pending, (state, action) => {
      state.loading = true;
    });
    ////// checkNumUser
    builder.addCase(checkNumUser.fulfilled, (state, action) => {
      state.loading = false;
      state.alertText = {
        text: 'Ваш номер успешно переименован!',
        backColor: 'green',
        state: true,
      };
    });
    builder.addCase(checkNumUser.rejected, (state, action) => {
      state.error = action.payload;
      state.alertText = {
        text: 'Не удалось изменить номер, попробуйте еще раз...',
        backColor: 'red',
        state: true,
      };
      state.loading = false;
    });
    builder.addCase(checkNumUser.pending, (state, action) => {
      state.loading = true;
    });
    /////// editPlaceUser
    builder.addCase(editPlaceUser.fulfilled, (state, action) => {
      state.loading = false;
      state.alertText = {
        text: 'Ваш адрес успешно переименован!',
        backColor: 'green',
        state: true,
      };
    });
    builder.addCase(editPlaceUser.rejected, (state, action) => {
      state.error = action.payload;
      state.alertText = {
        text: 'Не удалось изменить ваш адрес, попробуйте еще раз...',
        backColor: 'red',
        state: true,
      };
      state.loading = false;
    });
    builder.addCase(editPlaceUser.pending, (state, action) => {
      state.loading = true;
    });
  },

  reducers: {
    changeOrderUser: (state, action) => {
      state.orderUser = action.payload;
    },
    chnageAlertText: (state, action) => {
      state.alertText = action.payload;
    },
  },
});

export const { changeOrderUser, chnageAlertText } = EditDataUser.actions;

export default EditDataUser.reducer;
