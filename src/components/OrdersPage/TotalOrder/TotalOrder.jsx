import React from 'react';
import './TotalOrder.scss';
import Modals from '../../Modals/Modals';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeOrderUser,
  sendOrderFoods,
} from '../../../store/reducers/postRequestSlice';

const TotalOrder = (props) => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(0);

  const { orderUser } = useSelector((state) => state.postRequestSlice);
  const sendData = (e) => {
    e.preventDefault();
    dispatch(sendOrderFoods(orderUser));
    props.changeState(false);
  };
  console.log(orderUser);

  const changeInput = (e) => {
    e.preventDefault();
    dispatch(
      changeOrderUser({ ...orderUser, [e.target.name]: e.target.value })
    );
  };

  return (
    <Modals state={props.state} title={'Итого'} changeState={props.changeState}>
      <form className="totalOrder" onSubmit={sendData}>
        <h5>Покупатель</h5>
        <input
          onChange={(e) => changeInput(e)}
          type="text"
          name="phone"
          required
          placeholder="Телефон"
          value={orderUser?.phone}
        />
        <input
          onChange={(e) => changeInput(e)}
          type="text"
          name="fio"
          required
          placeholder="ФИО"
          value={orderUser?.fio}
        />
        <h5>Доставка</h5>
        <input
          onChange={(e) => changeInput(e)}
          type="text"
          name="zakaz_from_address"
          required
          placeholder="Киевская улица, 71"
          value={orderUser?.zakaz_from_address}
        />
        <input
          onChange={(e) => changeInput(e)}
          type="text"
          name="zakaz_to_address"
          required
          placeholder="Квартира и этаж"
          value={orderUser?.zakaz_to_address}
        />
        <input
          onChange={(e) => changeInput(e)}
          type="text"
          name="zakaz_to_address_dop"
          required
          placeholder="Время доставки"
          value={orderUser?.zakaz_to_address_dop}
        />
        <input
          onChange={(e) => changeInput(e)}
          type="text"
          name="zakaz_comment"
          required
          placeholder="Доп. информация (код двери, домофон и т.п.)"
          value={orderUser?.zakaz_comment}
        />
        <h5>Оплата</h5>
        <input
          onChange={(e) => changeInput(e)}
          type="text"
          name="sdacha"
          required
          placeholder="Нужна сдача с..."
          value={orderUser?.sdacha}
        />
        <h5>Дополнительно</h5>
        <div className="dishes">
          <h6>Посуда</h6>
          <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
        <input
          onChange={(e) => changeInput(e)}
          type="text"
          name="nnnn"
          required
          placeholder="Комментарий к заказу"
          // value={orderUser?.}// добавь
        />
        <div className="line"></div>
        <div className="itog">
          <h6>Стоимость товаров</h6>
          <p>2000 сом</p>
        </div>
        <div className="itog">
          <h6>Посуда</h6>
          <p>50 сом</p>
        </div>
        <div className="itog">
          <h6>Доставка</h6>
          <p>200 сом</p>
        </div>
        <div className="allItog">
          <h5>Итого</h5>
          <h5>2250 сом</h5>
        </div>
        <button className="standartBtn" type="submit">
          Оформить заказ
        </button>
      </form>
    </Modals>
  );
};

export default TotalOrder;
