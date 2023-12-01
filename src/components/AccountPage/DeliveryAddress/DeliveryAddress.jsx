import React from 'react';
import './DeliveryAddress.scss';
import Modals from '../../Modals/Modals';

const DeliveryAddress = (props) => {
  const sendData = (e) => {
    e.preventDefault();
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
            required
            name="nnnnn"
            placeholder="Киевская улица, 71"
          />
          <input
            type="text"
            required
            name="nnnnn"
            placeholder="Квартира и этаж"
          />
          <input
            type="text"
            required
            name="nnnnn"
            placeholder="Время доставки"
          />
          <input
            type="text"
            required
            name="nnnnn"
            placeholder="Доп. информация (код двери, домофон и т.п.)"
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
