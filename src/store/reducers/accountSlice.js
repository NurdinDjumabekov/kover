import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataUser: {
    name: '',
    numberPhone: '',
    placeUser: '',
    session: 0,
    contacts: [], // {message:whatsApp,num:996700754454}
    idUser: 0,
  },
  stateSendNum: 1,
  tokenNum: '',
  tokenName: '',
};

const accountSlice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {
    changeDataUser: (state, action) => {
      state.dataUser = action.payload;
    },
    addSession: (state, action) => {
      state.dataUser = {
        ...state.dataUser,
        session: action.payload,
      };
    },
    changeStateSendNum: (state, action) => {
      state.stateSendNum = action.payload;
    },
    changeTokenNum: (state, action) => {
      state.tokenNum = action.payload;
    },
    changeTokenName: (state, action) => {
      state.tokenName = action.payload;
    },
  },
});

export const {
  changeDataUser,
  addSession,
  changeStateSendNum,
  changeTokenNum,
  changeTokenName,
} = accountSlice.actions;

export default accountSlice.reducer;
