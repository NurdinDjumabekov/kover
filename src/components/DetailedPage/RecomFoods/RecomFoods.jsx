import React from 'react';
import { debounce } from 'lodash';
import styles from './RecomFoods.module.scss';
import foods from '../../../assets/images/noneData/foodsss.png';
import OrderMenu from '../OrderMenu/OrderMenu';
import { useDispatch, useSelector } from 'react-redux';
import TypesInnerData from '../TypesInnerData/TypesInnerData';
import { addFoodsOrders } from '../../../store/reducers/statesSlice';
import { searchInnerFood } from '../../../store/reducers/postRequestSlice';

const RecomFoods = () => {
  const dispatch = useDispatch();
  const { innerData } = useSelector((state) => state.postRequestSlice);
  const { allFoodsOrders } = useSelector((state) => state.statesSlice);

  const arrBucket = [
    {
      codeid: 1,
      product_name: 'Салат из свежих овощей',
      photo: foods,
      product_price: '90 сом',
      place: 'Ресторан Фаиза',
      status: 5,
    },
    {
      codeid: 2,
      product_name: 'Фаиза Фаиза Фаиза Фаиза  Фаиза',
      photo: foods,
      product_price: '150 сом',
      place: 'Ресторан Фаиза',
      status: 2,
    },
  ];
  const addBucket = (data) => {
    localStorage.setItem('allFoodsOrders', [...allFoodsOrders, data]);
    dispatch(addFoodsOrders([...allFoodsOrders, data]));
  };

  console.log(innerData, 'innerData');
  console.log(allFoodsOrders, 'allFoodsOrders');

  const searchInput = debounce((text) => {
    dispatch(searchInnerFood(text));
  }, 800);

  return (
    <div className={styles.recomBLock}>
      <div className="container">
        <div className={styles.recomBLock__inner}>
          <h5>Меню</h5>
          <input
            type="search"
            placeholder="Поиск блюд"
            onChange={(e) => searchInput(e.target.value)}
          />
          <div>
            <TypesInnerData />
          </div>
          <ul>
            {arrBucket?.map((food) => (
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
