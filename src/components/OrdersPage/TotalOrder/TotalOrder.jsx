import React from 'react';
import './TotalOrder.scss';
import Modals from '../../Modals/Modals';

const TotalOrder = (props) => {
  const [count, setCount] = React.useState(0);

  return (
    <Modals state={props.state} title={'Итого'} changeState={props.changeState}>
      <div className="totalOrder">
        <h5>Покупатель</h5>
        <input type="text" name="nnnn" required placeholder="Телефон" />
        <input type="text" required placeholder="ФИО" />
        <h5>Доставка</h5>
        <input
          type="text"
          name="nnnn"
          required
          placeholder="Киевская улица, 71"
        />
        <input type="text" name="nnnn" required placeholder="Квартира и этаж" />
        <input type="text" name="nnnn" required placeholder="Время доставки" />
        <input
          type="text"
          name="nnnn"
          required
          placeholder="Доп. информация (код двери, домофон и т.п.)"
        />
        <h5>Оплата</h5>
        <input
          type="text"
          name="nnnn"
          Комментарий
          к
          заказу
          placeholder="Нужна сдача с..."
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
        <input type="text" name="nnnn" placeholder=" Комментарий к заказу" />
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
        <button className="standartBtn">Оформить заказ</button>
      </div>
    </Modals>
  );
};

export default TotalOrder;
