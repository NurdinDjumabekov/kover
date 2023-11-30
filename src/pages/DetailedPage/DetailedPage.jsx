import React from 'react';
import styles from './DetailedPage.module.scss';
import { useNavigate } from 'react-router-dom';
import imgPrev from '../../assets/icons/backBtn.svg';
import TypesDetailed from '../../components/DetailedPage/TypesDetailed/TypesDetailed';
import DataCategories from '../../components/DetailedPage/DataCategories/DataCategories';

const DetailedPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.detailedBlock}>
      <div className="container">
        <div className={styles.detailedBlock__inner}>
          <div>
            <button className={styles.back} onClick={() => navigate(-1)}>
              <img src={imgPrev} alt="<" />
              <p>Каталог</p>
              <span>Рестораны</span>
            </button>
          </div>
          <TypesDetailed />
          <DataCategories />
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
