import React from 'react';
import goods from '../../../assets/images/noneData/foodsss.png';
import Modals from '../../Modals/Modals';
import './EveryOrder.scss';

const EveryOrder = (props) => {
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
    <Modals
      state={props.state}
      title={'Заказ 08.09.2023 в 12:54'}
      changeState={props.changeState}
    >
      <div className="historyModal">
        <p>Заказ создан</p>
        <div>
          <span>680 сом</span>
          <div>
            <p>Ресторан Фаиза</p>
            <i>5 позиций</i>
          </div>
        </div>
        <ul>
          {arrDataHistory?.map((i) => (
            <li key={i.id}>
              <div className="food">
                <img src={i.img} alt="" />
              </div>
              <div className="mainContent">
                <p>{i.title}</p>
                <span>{i.price}</span>
              </div>
              <p>{i.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </Modals>
  );
};

export default EveryOrder;
