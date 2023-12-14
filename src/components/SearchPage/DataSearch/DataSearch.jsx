import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DataSearch.module.scss';
//// imgs
import foods from '../../../assets/images/noneData/foodsss.png';
import star from '../../../assets/icons/star.svg';
import clock from '../../../assets/icons/clock.svg';
import kitchen from '../../../assets/icons/kitchen.svg';
import transport from '../../../assets/icons/transport.svg';
import check from '../../../assets/icons/check.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFoodsOrders,
  changePathCatalog,
  changePositionFoods,
  changeSumDishes,
  changeSumOrdersFoods,
} from '../../../store/reducers/statesSlice';
import { chnageAlertText } from '../../../store/reducers/EditDataUser';

const DataSearch = () => {
  const dispatch = useDispatch();
  const { typeSearch, dataSearchMain } = useSelector(
    (state) => state.requestFoodSlice
  );

  const addBucket = (data) => {
    dispatch(addFoodsOrders(data));
    dispatch(changeSumOrdersFoods());
    dispatch(changePositionFoods());
    dispatch(changeSumDishes());
    alertAddBucket();
  };

  const alertAddBucket = () => {
    dispatch(
      chnageAlertText({
        text: 'Продук был добавлен в корзину',
        backColor: 'green',
        state: true,
      })
    );
    setTimeout(() => {
      dispatch(
        chnageAlertText({
          text: '',
          backColor: 'transparent',
          state: false,
        })
      );
    }, 800);
  };

  // console.log(dataSearchMain, 'dataSearchMain');

  const clickEstablishment = (name) => {
    dispatch(changePathCatalog(name));
    localStorage.setItem('pathCatalog', name);
  };

  return (
    <div className={styles.alldata}>
      {dataSearchMain?.length !== 0 && (
        <>
          {typeSearch === 1
            ? dataSearchMain?.map((food) => (
                <NavLink
                  key={food.codeid}
                  to={`/product/${food?.codeid}/${food?.establishment_name}/${food?.code_establishment}/${food?.code_category}`}
                  className={styles.everyData}
                  onClick={() => clickEstablishment('Магазины')}
                >
                  <div className={styles.imgs}>
                    {food?.photo ? (
                      <img src={food.photo} alt="food" />
                    ) : (
                      <img src={foods} alt="food" />
                    )}
                    <img src={food?.logo} className={styles.logo} alt="" />
                  </div>
                  <div className={styles.everyData__inner}>
                    <h4>{food.establishment_name}</h4>
                    <div>
                      <img src={star} alt="*" />
                      <span>{food.rating}</span>
                      {/* <p>{food.quantity}</p> */}
                    </div>
                    <div className={styles.rating}>
                      <img src={clock} alt="time" />
                      <p>{`${food?.time?.[0]?.from_time_formatted} - ${food?.time?.[0]?.to_time_formatted}`}</p>
                    </div>
                    <div>
                      <img src={kitchen} alt="kitchen" />
                      <p>{food.category_name}</p>
                    </div>
                    <div className={styles.checkList}>
                      <div>
                        <img src={transport} alt="transport" />
                        <p>{food.price_dostavka} сом</p>
                      </div>
                      <div>
                        <img src={check} alt="check" />
                        <p>{food.percent_stavka} сом</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))
            : dataSearchMain?.map((food) => (
                <li key={food.codeid}>
                  {food?.status && (
                    <p className={styles.types}>{food?.status}</p>
                  )}
                  {food?.photo ? (
                    <img src={food?.photo} alt="временно" />
                  ) : (
                    <img src={foods} alt="временно" />
                  )}
                  <h6>{food.product_name}</h6>
                  <div>
                    <p>{food.product_price} сом</p>
                    <span>
                      {food.v_ves} {food.ves_name}
                    </span>
                  </div>
                  <button onClick={() => addBucket(food)}>Добавить</button>
                </li>
              ))}
        </>
      )}
    </div>
  );
};

export default DataSearch;
