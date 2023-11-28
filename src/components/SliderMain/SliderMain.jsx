import React from 'react';
import foods from '../../assets/images/noneData/orderingFood.png';
import { NavLink } from 'react-router-dom';
import styles from './SliderMain.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NoneBtn = () => {
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
  const arrData = [
    {
      title: 'Доставка всего за 99 сом',
      img: foods,
      path: '/',
    },
    {
      title: 'Доставка всего за 999 сом',
      img: foods,
      path: '/',
    },
  ];

  return (
    <div className={styles.parentSlider}>
      <div className="container">
        <div className={styles.parentSlider__inner}>
          <Slider {...settings}>
            {arrData?.map((slid, ind) => (
              <div key={ind} className={styles.parentSlider__every}>
                <div>
                  <h3>{slid.title}</h3>
                  <NavLink to={slid.path}>Подробнее...</NavLink>
                </div>
                <div>
                  <img src={slid.img} alt="foods" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderMain;
