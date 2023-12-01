import React, { useEffect } from 'react';
import styles from './DetailedPage.module.scss';
import TypesDetailed from '../../components/DetailedPage/TypesDetailed/TypesDetailed';
import DataCategories from '../../components/DetailedPage/DataCategories/DataCategories';
import PathToFiles from '../../components/PathToFiles/PathToFiles';
import { useDispatch } from 'react-redux';
import { changePathOne } from '../../store/reducers/pathSiteSlice';

const DetailedPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePathOne({ link: '/categories', title: 'Каталог' }));
  }, []);

  return (
    <div className={styles.detailedBlock}>
      <div className="container">
        <div className={styles.detailedBlock__inner}>
          <PathToFiles />
          <TypesDetailed />
          <DataCategories />
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
