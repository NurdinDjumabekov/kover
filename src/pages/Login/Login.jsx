import React from 'react';
import logo from '../../assets/images/Logo.png';
import styles from './Login.module.scss';
import { NavLink } from 'react-router-dom';
import InputMask from 'react-input-mask';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className="container">
        <NavLink to={'/'} className={styles.login__prev}></NavLink>

        <div className={styles.login__inner}>
          <div className="logoImg">
            <img src={logo} alt="logo" />
          </div>
          <h1>Ковёр-Самолёт доставит всё!</h1>
          <p>Доставка обедов, продуктов, напитков, медикаментов и цветов</p>
          <form>
            <InputMask
              mask="+999(999)99-99-99"
              placeholder="+996(700)75-44-54"
              // value={}
              name="number"
              // onChange={changeInput}
              required
            />
            <button type="submit">Отправить код</button>
            <label>Мы вышлем код подтверждения в SMS на ваш мобильный.</label>
          </form>
        </div>
        <NavLink to={'/welcome'} className={styles.login__next}></NavLink>
      </div>
    </div>
  );
};

export default Login;
