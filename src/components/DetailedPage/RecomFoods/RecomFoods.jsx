import React, { useEffect } from 'react';
import styles from './RecomFoods.module.scss';
import foods from '../../../assets/images/noneData/foodsss.png';
import OrderMenu from '../OrderMenu/OrderMenu';
import { useDispatch, useSelector } from 'react-redux';
import TypesInnerData from '../TypesInnerData/TypesInnerData';
import { addFoodsOrders } from '../../../store/reducers/statesSlice';

const RecomFoods = () => {
  const dispatch = useDispatch();
  const { innerData } = useSelector((state) => state.postRequestSlice);
  const { allFoodsOrders } = useSelector((state) => state.statesSlice);

  console.log(innerData, 'innerData');

  const addBucket = (data) => {
    // console.log(data);
    dispatch(addFoodsOrders([...allFoodsOrders, data]));
  };
  // console.log(allFoodsOrders);
  // useEffect(() => {
  //   console.log(allFoodsOrders);
  //   console.log(allFoodsOrders, 'allFoodsOrders');

  // }, [allFoodsOrders]);
    console.log(allFoodsOrders, 'allFoodsOrders');


  return (
    <div className={styles.recomBLock}>
      <div className="container">
        <div className={styles.recomBLock__inner}>
          <h5>Меню</h5>
          <input type="search" placeholder="Поиск блюд" />
          <div>
            <TypesInnerData />
          </div>
          <ul>
            {innerData?.map((food) => (
              <li key={food.codeid}>
                {food?.status && <p className={styles.types}>{food?.status}</p>}
                <img src={food?.photo} alt="временно" />
                <h6>{food.product_name}</h6>
                <div>
                  <p>{food.product_price} сом</p>
                  {/* <span>{food.massa}</span> */}
                </div>
                <button onClick={() => addBucket(food)}>Добавить</button>
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
