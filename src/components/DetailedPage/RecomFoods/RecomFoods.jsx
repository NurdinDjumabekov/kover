import React from 'react';
import styles from './RecomFoods.module.scss';
import foods from '../../../assets/images/noneData/foodsss.png';
import OrderMenu from '../OrderMenu/OrderMenu';

const RecomFoods = () => {
  const arrData = [
    {
      id: 1,
      img: foods,
      title: 'Салат из свежих овощей',
      price: '90см',
      massa: '260г',
      type: 'Популярно',
    },
    {
      id: 2,
      img: foods,
      title: 'Салат из свежих овощей',
      price: '90см',
      massa: '260г',
      type: 'Популярно',
    },
    {
      id: 3,
      img: foods,
      title: 'Салат из свежих овощей',
      price: '90см',
      massa: '260г',
      type: 'Популярно',
    },
  ];

  return (
    <div className={styles.recomBLock}>
      <div className="container">
        <div className={styles.recomBLock__inner}>
          <h5>Меню</h5>
          <input type="search" placeholder="Поиск блюд" />
          <h5>Салаты</h5>
          <ul>
            {arrData?.map((food) => (
              <li key={food.id}>
                <img src={food.img} alt="временно" />
                <h6>{food.title}</h6>
                <div>
                  <p>{food.price}</p>
                  <span>{food.massa}</span>
                </div>
                <button>Добавить</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <OrderMenu />
    </div>
  );
};

export default RecomFoods;
