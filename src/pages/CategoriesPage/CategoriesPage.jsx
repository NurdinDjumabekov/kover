import React, { useState } from 'react';
import styles from './CategoriesPage.module.scss';
import img from '../../assets/images/noneData/categ.png';

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
  return (
    <div className={styles.caregoryBlock}>
      <div className="container">
        <div className={styles.caregoryBlock__inner}>
          {categories?.map((i) => (
            <div key={i.id} className={styles.everyCategory}>
              <h4>{i.title}</h4>
              <img src={i.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
