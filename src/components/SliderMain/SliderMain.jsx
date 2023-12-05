import React from 'react';
import foods from '../../assets/images/noneData/orderingFood.png';
import { NavLink } from 'react-router-dom';
import styles from './SliderMain.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux';

export const NoneBtn = () => {
  return <div style={{ display: 'none' }} />;
};

const SliderMain = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NoneBtn />,
    prevArrow: <NoneBtn />,
  };
  const { discounts } = useSelector((state) => state.requestFoodSlice);

  // console.log(discounts, 'discounts');

  return (
    <div className={styles.parentSlider}>
      <div className="container">
        <div className={styles.parentSlider__inner}>
          <Slider {...settings}>
            {discounts?.map((slid) => {
              return slid?.baner === '' ? (
                <a key={slid.codeid} className={styles.parentSlider__every}>
                  <div>
                    <h3>{slid?.description}</h3>
                    <p>Подробнее...</p>
                  </div>
                  <div>
                    {slid?.photo ? (
                      <p>Здесь могла быть ваша реклама</p>
                    ) : (
                      <img src={slid.photo} alt="foods" />
                    )}
                  </div>
                </a>
              ) : (
                <a key={slid.codeid} className={styles.parentSlider__altEvery}>
                  {slid?.baner ? (
                    <img src={slid?.baner} alt="banner" />
                  ) : (
                    <p>Здесь могла быть ваша реклама</p>
                  )}
                </a>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderMain;
