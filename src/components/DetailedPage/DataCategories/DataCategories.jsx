import React from 'react';
import styles from './DataCategories.module.scss';
import foods from '../../../assets/images/noneData/foodsss.png';
import { NavLink } from 'react-router-dom';
import star from '../../../assets/icons/star.svg';
import clock from '../../../assets/icons/clock.svg';
import kitchen from '../../../assets/icons/kitchen.svg';
import transport from '../../../assets/icons/transport.svg';
import check from '../../../assets/icons/check.svg';

const DataCategories = () => {
  const arrData = [
    {
      id: 1,
      view: 'Популярно',
      title: 'Фаиза',
      img: foods,
      rating: 4.7,
      quantity: '(200+)',
      time: '11:00 - 23:30',
      type: 'Национальная кухня',
      delivery: '200 сом',
      price: '~1000 сом',
    },
    {
      id: 2,
      view: 'Популярно',
      title: 'Фаиза',
      img: foods,
      rating: 4.7,
      quantity: '(200+)',
      time: '11:00 - 23:30',
      type: 'Национальная кухня',
      delivery: '200 сом',
      price: '~1000 сом',
    },
    {
      id: 4,
      view: 'Популярно',
      title: 'Фаиза',
      img: foods,
      rating: 4.7,
      quantity: '(200+)',
      time: '11:00 - 23:30',
      type: 'Национальная кухня',
      delivery: '200 сом',
      price: '~1000 сом',
    },
    {
      id: 5,
      view: 'Популярно',
      title: 'Фаиза',
      img: foods,
      rating: 4.7,
      quantity: '(200+)',
      time: '11:00 - 23:30',
      type: 'Национальная кухня',
      delivery: '200 сом',
      price: '~1000 сом',
    },
  ];

  return (
    <div className={styles.category}>
      {arrData?.map((food) => (
        <NavLink
          key={food.id}
          to={`/product/${food.id}`}
          className={styles.everyData}
        >
          <img src={food.img} alt="food" />
          <div className={styles.everyData__inner}>
            <h4>{food.title}</h4>
            <div>
              <img src={star} alt="*" />
              <span>{food.rating}</span>
              <p>{food.quantity}</p>
            </div>
            <div className={styles.rating}>
              <img src={clock} alt="time" />
              <p>{food.time}</p>
            </div>
            <div>
              <img src={kitchen} alt="kitchen" />
              <p>{food.type}</p>
            </div>
            <div className={styles.checkList}>
              <div>
                <img src={transport} alt="transport" />
                <p>{food.delivery}</p>
              </div>
              <div>
                <img src={check} alt="checcheckkcheck" />
                <p>{food.price}</p>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default DataCategories;
