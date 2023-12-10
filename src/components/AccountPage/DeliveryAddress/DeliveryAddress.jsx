import React, { useState } from 'react';
import './DeliveryAddress.scss';
import Modals from '../../Modals/Modals';
import { useDispatch } from 'react-redux';
import { editPlaceUser } from '../../../store/reducers/EditDataUser';

const DeliveryAddress = (props) => {
  const dispatch = useDispatch();
  const [placeUser, setPlaceUser] = useState({
    mainAdres: '',
    noMainAdres: '',
    infoDop: '',
  });

  const changeInput = (e) => {
    e.preventDefault();
    setPlaceUser({ ...placeUser, [e.target.name]: e.target.value });
  };
  const sendData = (e) => {
    e.preventDefault();
    dispatch(editPlaceUser(placeUser));
    props.changeState(false);
    //// надо создать в localeStotage ключ для адреса пользователя и innput num перекинуть в redux
  };
  return (
    <Modals
      state={props.state}
      title={'Контакты'}
      changeState={props.changeState}
    >
      <div className="delivery">
        <form onSubmit={sendData}>
          <input
            type="text"
            name="mainAdres"
            required
            placeholder="Киевская улица, 71"
            onChange={changeInput}
          />
          <input
            type="text"
            name="noMainAdres"
            required
            placeholder="Квартира и этаж"
            onChange={changeInput}
          />
          <input
            type="text"
            required
            name="infoDop"
            placeholder="Доп. информация (код двери, домофон и т.п.)"
            onChange={changeInput}
          />
          <button type="submit" className="standartBtn">
            Подтвердить
          </button>
        </form>
      </div>
    </Modals>
  );
};

export default DeliveryAddress;
