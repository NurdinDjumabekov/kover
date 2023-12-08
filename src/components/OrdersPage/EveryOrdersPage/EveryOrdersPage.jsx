import React from 'react';
import styles from './EveryOrdersPage.module.scss';
import {
  addFoodsOrders,
  changePositionFoods,
  changeSumDishes,
  changeSumOrdersFoods,
  delfoodCount,
  discountFoods,
} from '../../../store/reducers/statesSlice';
import { useDispatch } from 'react-redux';

const EveryOrdersPage = ({ item }) => {
  const dispatch = useDispatch();
  const count = item.count || 0;

  const handleCounter = (type) => {
    if (type === 'add') {
      dispatch(addFoodsOrders(item));
    } else if (type === 'del' && count > 0) {
      dispatch(discountFoods({ codeid: item.codeid }));
      dispatch(delfoodCount({ count: item.count }));
    }
    dispatch(changeSumOrdersFoods());
    dispatch(changePositionFoods());
    dispatch(changeSumDishes());
  };

  return (
    <div className={styles.order}>
      <div className="container">
        <div className={styles.order__inner}>
          <div className={styles.order__mainData}>
            <img src={item.photo} alt="" />
            <div>
              <h4>{item.product_name} </h4>
              <p>{item.product_price} сом</p>
              <span>{item.place}</span>
            </div>
          </div>
          <div className={styles.counter}>
            <div>
              <button onClick={() => handleCounter('del')}>-</button>
              <p>{item.count}</p>
              <button onClick={() => handleCounter('add')}>+</button>
            </div>
            <p>{item.product_price} сом</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryOrdersPage;
