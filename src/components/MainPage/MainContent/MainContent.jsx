import React from 'react';
import ordering from '../../../assets/images/Main/ordering.png';
import delivery from '../../../assets/images/Main/delivery.png';
import styles from './MainContent.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainContent = () => {
  const { allCategory } = useSelector((state) => state.requestFoodSlice);

  return (
    <div className={styles.mainContent}>
      <div className="container">
        <div className={styles.mainContent__inner}>
          {allCategory?.map((i) => (
            <NavLink
              to={`/detailed/${i.codeid}`}
              key={i.codeid}
              className={styles.everyCategory}
            >
              <img src={i.foto} alt="" />
              <h4>{i.category_name}</h4>
            </NavLink>
          ))}
          <NavLink to={`/delivery`} className={styles.everyCategory}>
            <img src={delivery} alt="" />
            <h4>Курьерская доставка</h4>
          </NavLink>
          <NavLink to={`/listorder`} className={styles.everyCategory}>
            <img src={ordering} alt="" />
            <h4>Заказ по списку</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
