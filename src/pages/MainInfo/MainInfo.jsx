import React from 'react';
import logo from '../../assets/images/Logo.png';
import foods from '../../assets/images/Main/foods.png';
import styles from './MainInfo.module.scss';
import { NavLink } from 'react-router-dom';

const MainInfo = () => {
  return (
    <div className={styles.mainInfo}>
      <div className="container">
        <div className={styles.mainInfo__inner}>
          <div className="logoImg">
            <img src={logo} alt="logo" />
          </div>
          <h1>Добро пожаловать!</h1>
          <p>Авторизуйтесь и наслаждайтесь любимыми блюдами!</p>
          <div className={styles.mainInfo__foods}>
            <img src={foods} alt="foods" />
          </div>
          <div className={styles.line}>
            <div></div>
          </div>
        </div>
        <NavLink to={'/login'} className={styles.mainInfo__next}></NavLink>
      </div>
    </div>
  );
};

export default MainInfo;
