import React from 'react';
import styles from './OrdersPage.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import img from '../../assets/images/noneData/Image.png';
import EveryOrdersPage from '../../components/OrdersPage/EveryOrdersPage';

const OrdersPage = () => {
  const navigate = useNavigate();

  const arrBucket = [
    {
      id: 1,
      title: 'Салат из свежих овощей',
      img: img,
      price: '90 сом',
      place: 'Ресторан Фаиза',
    },
    {
      id: 2,
      title: 'Фаиза Фаиза Фаиза Фаиза  Фаиза',
      img: img,
      price: '150 сом',
      place: 'Ресторан Фаиза',
    },
  ];

  return (
    <div className={styles.orderBlock}>
      <div className="container">
        <div className={styles.orderBlock__inner}>
          <button onClick={() => navigate(-1)} className={styles.prevBacket}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.04999 9.40845L11.7667 4.70011C11.8441 4.622 11.9363 4.56001 12.0378 4.5177C12.1394 4.4754 12.2483 4.45361 12.3583 4.45361C12.4683 4.45361 12.5773 4.4754 12.6788 4.5177C12.7804 4.56001 12.8725 4.622 12.95 4.70011C13.1052 4.85625 13.1923 5.06746 13.1923 5.28761C13.1923 5.50777 13.1052 5.71898 12.95 5.87511L8.825 10.0418L12.95 14.1668C13.1052 14.3229 13.1923 14.5341 13.1923 14.7543C13.1923 14.9744 13.1052 15.1856 12.95 15.3418C12.8728 15.4205 12.7808 15.4832 12.6792 15.5261C12.5777 15.569 12.4686 15.5913 12.3583 15.5918C12.2481 15.5913 12.139 15.569 12.0374 15.5261C11.9359 15.4832 11.8438 15.4205 11.7667 15.3418L7.04999 10.6334C6.96541 10.5554 6.8979 10.4607 6.85173 10.3553C6.80555 10.2499 6.78172 10.136 6.78172 10.0209C6.78172 9.90586 6.80555 9.79202 6.85173 9.68661C6.8979 9.58119 6.96541 9.48648 7.04999 9.40845Z"
                fill="#222222"
              />
            </svg>
            <p>Ваша корзина</p>
          </button>
          <div className={styles.pay}>
            <p>8 позиций</p>
            <span>2000 сом</span>
          </div>
          {arrBucket?.map((item) => (
            <EveryOrdersPage key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
