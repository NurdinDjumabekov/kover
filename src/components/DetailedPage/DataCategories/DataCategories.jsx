import React from 'react';
import styles from './DataCategories.module.scss';
import foods from '../../../assets/images/noneData/foodsss.png';
import { NavLink } from 'react-router-dom';
import star from '../../../assets/icons/star.svg';
import clock from '../../../assets/icons/clock.svg';
import kitchen from '../../../assets/icons/kitchen.svg';
import transport from '../../../assets/icons/transport.svg';
import check from '../../../assets/icons/check.svg';

import { useDispatch } from 'react-redux';
import { changePathThree } from '../../../store/reducers/pathSiteSlice';

const DataCategories = ({ allDataFood }) => {
  const dispatch = useDispatch();

  console.log(allDataFood, 'allDataFood');
  return (
    <div className={styles.category}>
      {allDataFood?.length === 0 ? (
        <p className="noneData">Данных пока что нету</p>
      ) : (
        allDataFood?.map((food) => (
          <NavLink
            key={food.code_category}
            to={`/product/${food.code_category}`}
            className={styles.everyData}
            onClick={() =>
              dispatch(
                changePathThree({ link: '', title: food.establishment_name })
              )
            }
          >
            <div className={styles.imgs}>
              {food?.photo === 'null' ? (
                <img src={foods} alt="food" />
              ) : (
                <img src={food.photo} alt="food" />
              )}
              <img src={food?.logo} className={styles.logo} alt="" />
              <p className={styles.types}>Популярно</p>
            </div>
            <div className={styles.everyData__inner}>
              <h4>{food.establishment_name}</h4>
              <div>
                <img src={star} alt="*" />
                <span>{food.status}</span>
                <p>{food.quantity}</p>
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
      )}
    </div>
  );
};

export default DataCategories;
