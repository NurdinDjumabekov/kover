import React from 'react';
import SliderMain from '../../components/SliderMain/SliderMain';
import styles from './MainPage.module.scss';
import MainContent from '../../components/MainPage/MainContent/MainContent';

const MainPage = () => {
  return (
    <div className={styles.mainBlock}>
      <SliderMain />
      <MainContent />
    </div>
  );
};

export default MainPage;
