import React from 'react';
import styles from './HistoryOrders.module.scss';
import goods from '../../../assets/images/noneData/foodsss.png';

export const HistoryOrders = ({ setStateModal }) => {
  const arrDataHistory = [
    {
      id: 1,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 2,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 3,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 4,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 5,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 6,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
  ];

  return (
    <ul className={styles.history}>
      <li>
        <h5>История заказов</h5>
      </li>
      {arrDataHistory?.map((food) => (
        <li key={food.id}>
          <div className={styles.viewFood}>
            <img src={food.img} alt="временно" />
            <div>
              <span>{food.status}</span>
              <p>{food.historyTime}</p>
              <b>{food.title}</b>
            </div>
          </div>
          <div className={styles.moreInfo}>
            <p>{food.price}</p>
            <button className="standartBtn" onClick={() => setStateModal(true)}>
              Подробно
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
