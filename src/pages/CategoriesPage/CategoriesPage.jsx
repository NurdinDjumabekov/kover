import React, { useState } from 'react';
import styles from './CategoriesPage.module.scss';
import img from '../../assets/images/noneData/categ.png';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePathTwo } from '../../store/reducers/pathSiteSlice';
import { getCategory } from '../../store/reducers/requestFoodSlice';
import Preloader from '../../components/Preloader/Preloader';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state.requestFoodSlice);

  React.useEffect(() => {
    dispatch(
      getCategory(
        'http://kover-site.333.kg/get_estab_category?category_type=main'
      )
    );
  }, []);

  // console.log(allCategory, 'allCategory');
  return (
    <div className={styles.caregoryBlock}>
      <div className="container">
        <div className={styles.caregoryBlock__inner}>
          {allCategory?.length === 0 ? (
            <Preloader />
          ) : (
            <>
              <NavLink
                to={`/delivery`}
                className={styles.everyCategory}
                onClick={() =>
                  dispatch(
                    changePathTwo({ link: '', title: 'Курьерская доставка' })
                  )
                }
              >
                <h4>Курьерская доставка</h4>
                <img src={img} alt="" />
              </NavLink>

              <NavLink
                to={`/listorder`}
                className={styles.everyCategory}
                onClick={() =>
                  dispatch(
                    changePathTwo({ link: '', title: 'Заказ по списку' })
                  )
                }
              >
                <h4>Заказ по списку</h4>
                <img src={img} alt="" />
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
