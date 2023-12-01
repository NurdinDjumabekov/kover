import * as React from 'react';
import imgPrev from '../../assets/icons/backBtn.svg';
import { useNavigate } from 'react-router-dom';
import styles from './PathToFiles.module.scss';
import { useSelector } from 'react-redux';

const PathToFiles = () => {
  const navigate = useNavigate();
  const { pathOne, pathTwo, pathThree } = useSelector(
    (state) => state.pathSiteSlice
  );

  const backPrev = () => {
    navigate(-1);
  };

  return (
    <div className={styles.pathBlock}>
      <div className={styles.back}>
        <button onClick={() => navigate(pathOne.link)}>
          <img src={imgPrev} alt="<" />
          <p>Каталог</p>
        </button>
        <button onClick={backPrev}>Рестораны</button>
        {pathThree !== '' ? (
          <></>
        ) : (
          <button onClick={backPrev}>{pathThree.title}</button>
        )}
      </div>
    </div>
  );
};

export default PathToFiles;
