import React, { useState } from 'react';
import './EditNumber.scss';
import Modals from '../../Modals/Modals';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import {
  chnageAlertText,
  editNumUser,
} from '../../../store/reducers/EditDataUser';

const EditNumber = (props) => {
  const { dataUser, tokenNum } = useSelector((state) => state.accountSlice);
  const [inputNum, setInputNum] = useState(dataUser?.numberPhone);
  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    const phoneNumberPattern = /^\+\d{3}\(\d{3}\)\d{2}-\d{2}-\d{2}$/;

    if (phoneNumberPattern.test(inputNum)) {
      props.changeState(false);
      setTimeout(() => {
        props.more(true);
      }, 400);
      dispatch(editNumUser({ inputNum, dataUser, tokenNum }));
    } else {
      dispatch(
        chnageAlertText({
          text: 'Некорректный номер',
          backColor: 'red',
          state: true,
        })
      );
    }
  };

  return (
    <Modals
      state={props.state}
      title={'Смена номера'}
      changeState={props.changeState}
    >
      <div className="editNumber">
        <form>
          <InputMask
            mask="+999(999)99-99-99"
            placeholder="+996(700)75-44-54"
            value={inputNum}
            onChange={(e) => setInputNum(e.target.value)}
            required
          />
          <button type="submit" className="standartBtn" onClick={sendData}>
            Отправить код
          </button>
          <label>Мы вышлем код подтверждения в SMS на ваш мобильный.</label>
        </form>
      </div>
    </Modals>
  );
};

export default EditNumber;
