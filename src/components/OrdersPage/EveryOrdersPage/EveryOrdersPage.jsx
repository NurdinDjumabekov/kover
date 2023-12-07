import React, { useState } from 'react';
import styles from './EveryOrdersPage.module.scss';

const EveryOrdersPage = ({ item }) => {
  const [count, setCount] = useState(0);
  
  return (
    <div className={styles.order}>
      <div className="container">
        <div className={styles.order__inner}>
          <div className={styles.order__mainData}>
            <img src={item.photo} alt="" />
            <div>
              <h4>{item.product_name}</h4>
              <p>{item.product_price}</p>
              <span>{item.place}</span>
            </div>
          </div>
          <div className={styles.counter}>
            <div>
              <button onClick={() => setCount(count - 1)}>-</button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <p>{item.product_price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryOrdersPage;
