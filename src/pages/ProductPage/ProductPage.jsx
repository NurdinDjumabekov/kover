import React from 'react';
import imgPrev from '../../assets/icons/backBtn.svg';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import foods from '../../assets/images/noneData/foodsss.png';
///////////////////////////
import star from '../../assets/icons/star.svg';
import clock from '../../assets/icons/clock.svg';
import kitchen from '../../assets/icons/kitchen.svg';
import transport from '../../assets/icons/transport.svg';
import check from '../../assets/icons/check.svg';
import imgType from '../../assets/images/noneData/typeImg.png';
import SliderMain from '../../components/SliderMain/SliderMain';
import RecomFoods from '../../components/DetailedPage/RecomFoods/RecomFoods';
import { useDispatch, useSelector } from 'react-redux';
import { changePathThree } from '../../store/reducers/pathSiteSlice';
import { getEveryData } from '../../store/reducers/requestFoodSlice';

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { everyData } = useSelector((state) => state.requestFoodSlice);

  const objData = {
    id: 1,
    view: 'Популярно',
    title: 'Фаиза',
    img: foods,
    rating: 4.7,
    quantity: '(200+)',
    time: '11:00 - 23:30',
    type: 'Национальная кухня',
    delivery: '200 сом',
    price: '~1000 сом',
  };

  React.useEffect(() => {
    dispatch(getEveryData(`http://kover-site.333.kg/products/${id}`));
    return () => dispatch(changePathThree({ link: '', title: '' }));
  }, []);

  console.log(everyData, 'everyData');

  return (
    <div className={styles.producblock}>
      <div className="container">
        <button className={styles.back} onClick={() => navigate(-1)}>
          <img src={imgPrev} alt="<" />
          <p>Каталог</p>
          <i>Рестораны</i>
          <span>Фаиза</span>
        </button>
      </div>
      <div className={styles.producblock__inner}>
        <div className={styles.mainContent}>
          <img src={everyData.photo} alt="food" />
          <div className={styles.mainText}>
            <div className="container">
              <div className={styles.mainContent__up}>
                <h4>{everyData.establishment_name}</h4>
                <img src={imgType} alt="временно" />
              </div>
              <div className={styles.mainContent__down}>
                <div className={styles.mainContent__downThree}>
                  <div>
                    <img src={star} alt="*" />
                    <p>{everyData.product_percent}</p>
                    {/* <span>{everyData.quantity}</span> */}
                  </div>
                  <div className={styles.rating}>
                    <img src={clock} alt="time" />
                    <p>{`${everyData?.time?.[0]?.from_time_formatted} - ${everyData?.time?.[0]?.to_time_formatted}`}</p>
                  </div>
                  <div>
                    <img src={transport} alt="transport" />
                    {/* <p>{everyData.delivery}</p> */}
                  </div>
                </div>
                <div className={styles.mainContent__downTwo}>
                  <div>
                    <img src={check} alt="check" />
                    <p>~{everyData.product_price} сом</p>
                  </div>
                  <div>
                    <img src={kitchen} alt="kitchen" />
                    <p>{everyData.category_name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.producblock__moreData}>
        <div className="container">
          <p>
            Фотографии товаров в приложении могут не соответствовать их виду в
            действительности
          </p>
          <b>
            ВНИМАНИЕ! Цена за услуги может варьироваться в зависимости от работы
            курьера, также существует доплата за пределы города.
          </b>
        </div>
      </div>
      <SliderMain />
      <RecomFoods />
    </div>
  );
};

export default ProductPage;
