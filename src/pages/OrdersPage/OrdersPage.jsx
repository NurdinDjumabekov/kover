import React, { useState } from 'react';
import styles from './OrdersPage.module.scss';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/images/noneData/Image.png';
import backBtn from '../../assets/icons/backBtn.svg';
import EveryOrdersPage from '../../components/OrdersPage/EveryOrdersPage/EveryOrdersPage';
import TotalOrder from '../../components/OrdersPage/TotalOrder/TotalOrder';

const OrdersPage = () => {
  const [totalOrder, setTotalOrder] = useState(false);
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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.orderBlock}>
      <div className="container">
        <div className={styles.orderBlock__inner}>
          <button onClick={() => navigate(-1)} className={styles.prevBacket}>
            <img src={backBtn} alt="<" />
            <p>Ваша корзина</p>
          </button>
          <div className={styles.pay}>
            <p>8 позиций</p>
            <span>2000 сом</span>
          </div>
          {arrBucket?.map((item) => (
            <EveryOrdersPage key={item.id} item={item} />
          ))}
          <div className={styles.addOrder}>
            <button className="standartBtn" onClick={() => setTotalOrder(true)}>
              Оформить заказ
            </button>
          </div>
          <TotalOrder state={totalOrder} changeState={setTotalOrder} />
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
