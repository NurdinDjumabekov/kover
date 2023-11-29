import React from 'react';
import styles from './BaskesOrders.module.scss';

const BaskesOrders = ({ item }) => {
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.basketBlock__every}>
      <div className={styles.mainImg}>
        <img src={item.img} alt="временно" />
      </div>
      <div className={styles.mainInfo}>
        <h4>{item.title}</h4>
        <p>{item.price}</p>
      </div>
      <div className={styles.counter}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default BaskesOrders;
