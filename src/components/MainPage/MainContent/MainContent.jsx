import React from 'react';
import everyFood from '../../../assets/images/noneData/everyFood.png';
import styles from './MainContent.module.scss';
import { NavLink } from 'react-router-dom';

const MainContent = () => {
  const arrData = [
    {
      id: 1,
      title: 'Магазины',
      img: everyFood,
      path: '/main',
    },
    {
      id: 2,
      title: 'Магазины',
      img: everyFood,
      path: '/main',
    },
    {
      id: 3,
      title: 'Цветы',
      img: everyFood,
      path: '/main',
    },
    {
      id: 4,
      title: 'Магазины',
      img: everyFood,
      path: '/main',
    },
    {
      id: 5,
      title: 'Магазины',
      img: everyFood,
      path: '/main',
    },
    {
      id: 6,
      title: 'Цветы',
      img: everyFood,
      path: '/main',
    },
  ];

  return (
    <div className={styles.mainContent}>
      <div className="container">
        <div className={styles.mainContent__inner}>
          {arrData?.map((i) => (
            <NavLink
              to={`/detailed/${i.id}`}
              key={i.id}
              className={styles.everyCategory}
            >
              <img src={i.img} alt="" />
              <h4>{i.title}</h4>
            </NavLink>
          ))}
          <NavLink to={`/delivery`} className={styles.everyCategory}>
            <img src={everyFood} alt="" />
            <h4>Курьерская доставка</h4>
          </NavLink>
          <NavLink to={`/listOrder`} className={styles.everyCategory}>
            <img src={everyFood} alt="" />
            <h4>Заказ по списку</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
