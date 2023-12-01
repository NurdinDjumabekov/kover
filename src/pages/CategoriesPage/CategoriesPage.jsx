import React, { useState } from 'react';
import styles from './CategoriesPage.module.scss';
import img from '../../assets/images/noneData/categ.png';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changePathTwo } from '../../store/reducers/pathSiteSlice';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: 'Рестораны',
      img: img,
    },
    {
      id: 2,
      title: 'Магазины',
      img: img,
    },
    {
      id: 3,
      title: 'Цветы',
      img: img,
    },
    {
      id: 4,
      title: 'Лекарства',
      img: img,
    },
    {
      id: 5,
      title: 'Цветы',
      img: img,
    },
    {
      id: 6,
      title: 'Лекарства',
      img: img,
    },
    {
      id: 7,
      title: 'Лекарства',
      img: img,
    },
  ]);

  const dispacht = useDispatch();

  return (
    <div className={styles.caregoryBlock}>
      <div className="container">
        <div className={styles.caregoryBlock__inner}>
          {categories?.map((i) => (
            <NavLink
              to={`/detailed/${i.id}`}
              key={i.id}
              className={styles.everyCategory}
              onClick={() =>
                dispacht(changePathTwo({ link: '', title: i.title }))
              }
            >
              <h4>{i.title}</h4>
              <img src={i.img} alt="" />
            </NavLink>
          ))}
          <NavLink
            to={`/delivery`}
            className={styles.everyCategory}
            onClick={() =>
              dispacht(
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
              dispacht(changePathTwo({ link: '', title: 'Заказ по списку' }))
            }
          >
            <h4>Заказ по списку</h4>
            <img src={img} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
