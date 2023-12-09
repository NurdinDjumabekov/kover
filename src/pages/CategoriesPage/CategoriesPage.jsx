import React from 'react';
import styles from './CategoriesPage.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePathTwo } from '../../store/reducers/pathSiteSlice';
import { getCategory } from '../../store/reducers/requestFoodSlice';
import Preloader from '../../components/Preloader/Preloader';
import ordering from '../../assets/images/Main/ordering.png';
import delivery from '../../assets/images/Main/delivery.png';
import { changePathCatalog } from '../../store/reducers/statesSlice';
import img1 from '../../assets/images/noneData/categ.png';
import img2 from '../../assets/images/noneData/Rectangle4.png';
import img3 from '../../assets/images/noneData/Rectangle5.png';
import img4 from '../../assets/images/noneData/Rectangle6.png';
import img5 from '../../assets/images/noneData/Rectangle7.png';
import img6 from '../../assets/images/noneData/Rectangle8.png';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state.requestFoodSlice);

  const arrImg = [img2, img6, img5, img6, img2, img4, img3, img5, img5];

  React.useEffect(() => {
    dispatch(
      getCategory(
        'http://kover-site.333.kg/get_estab_category?category_type=main'
      )
    );
    window.scrollTo(0, 0);
  }, []);

  const clickEstablishment = (name) => {
    dispatch(changePathCatalog(name));
    localStorage.setItem('pathCatalog', name);
  };

  console.log(allCategory, 'allCategory');
  return (
    <div className={styles.caregoryBlock}>
      <div className="container">
        <div className={styles.caregoryBlock__inner}>
          {allCategory?.length === 0 ? (
            <Preloader />
          ) : (
            allCategory?.map((i, ind) => (
              <NavLink
                to={`/detailed/${i.codeid}/${i.category_name}`}
                key={i.codeid}
                className={styles.everyCategory}
                onClick={() => clickEstablishment(i?.category_name)}
              >
                <h4>{i.category_name}</h4>
                <img src={arrImg[ind]} alt="категория" />
              </NavLink>
            ))
          )}
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
            <img src={delivery} alt="delivery" />
          </NavLink>

          <NavLink
            to={`/listorder`}
            className={styles.everyCategory}
            onClick={() =>
              dispatch(changePathTwo({ link: '', title: 'Заказ по списку' }))
            }
          >
            <h4>Заказ по списку</h4>
            <img src={ordering} alt="ordering" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
