import React, { useState } from 'react';
import styles from './WelcomePage.module.scss';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [checkout, setCheckout] = useState(false);

  return (
    <div className={styles.welcome}>
      <div className="container">
        <div className={styles.welcome__inner}>
          <h2>Добро пожаловать!</h2>
          <p>Укажите своё имя, чтобы мы знали как к вам обращаться!</p>
          <input className={styles.name} type="text" placeholder="Ваше имя" />
          <div className={styles.agreement}>
            <span>
              Фотографии товаров в приложении могут не соответствовать их виду в
              действительности
            </span>
            <b>
              ВНИМАНИЕ! Цена за услуги может варьироваться в зависимости от
              работы курьера, также существует доплата за пределы города.
            </b>
            <div className={styles.checkbox}>
              <input
                id="good"
                type="checkbox"
                checked={checkout}
                onClick={() => setCheckout(!checkout)}
              />
              <label htmlFor="good">Согласен (на)</label>
            </div>
            <button
              onClick={() => navigate('/main')}
              disabled={!checkout}
              style={checkout ? {} : { opacity: 0.5 }}
            >
              Указать адрес
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
