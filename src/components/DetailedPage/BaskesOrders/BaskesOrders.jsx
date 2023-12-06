import React from 'react';
import styles from './BaskesOrders.module.scss';

const BaskesOrders = ({ item }) => {
  const [count, setCount] = React.useState(0);
  // localStorage.getItem('orderBucket') ||
  const counter = (type) => {
    if (type === 'add') {
      setCount(count + 1);
    } else if (type === 'del') {
      count > 0 ? setCount(count - 1) : setCount(0);
    }
  };

  return (
    <div className={styles.basketBlock__every}>
      <div className={styles.mainImg}>
        <img src={item.photo} alt="временно" />
      </div>
      <div className={styles.mainInfo}>
        <h4>{item.product_name}</h4>
        <p>{item.product_price} сом</p>
      </div>
      <div className={styles.counter}>
        <button onClick={() => counter('del')}>-</button>
        <p>{count}</p>
        <button onClick={() => counter('add')}>+</button>
      </div>
    </div>
  );
};

export default BaskesOrders;
