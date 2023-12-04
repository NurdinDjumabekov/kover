import React from 'react';
import SliderMain from '../../components/SliderMain/SliderMain';
import styles from './MainPage.module.scss';
import MainContent from '../../components/MainPage/MainContent/MainContent';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../store/reducers/requestFoodSlice';

const MainPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      getCategory(
        'http://kover-site.333.kg/get_estab_category?category_type=main'
      )
    );
  }, []);

  return (
    <div className={styles.mainBlock}>
      <SliderMain />
      <MainContent />
    </div>
  );
};

export default MainPage;
