import React from "react";
import SliderMain from "../../components/SliderMain/SliderMain";
import styles from "./MainPage.module.scss";
import MainContent from "../../components/MainPage/MainContent/MainContent";
import { useDispatch } from "react-redux";
import { getCategory } from "../../store/reducers/requestFoodSlice";

import img1 from "../../assets/images/noneData/everyFood.svg";
import img2 from "../../assets/images/noneData/Rectangle8.svg";
import img3 from "../../assets/images/noneData/Rectangle7.svg";
import img4 from "../../assets/images/noneData/Rectangle8.svg";
import img5 from "../../assets/images/noneData/Rectangle6.svg";
import img6 from "../../assets/images/noneData/Rectangle3.svg";
import img7 from "../../assets/images/noneData/Rectangle9.svg";
import img8 from "../../assets/images/noneData/Rectangle10.svg";
import img9 from "../../assets/images/noneData/alkogol.jpg";

import img10 from "../../assets/images/noneData/Rectangle10.svg";
import img11 from "../../assets/images/noneData/Rectangle11.svg";
import img12 from "../../assets/images/noneData/Rectangle12.svg";
import img13 from "../../assets/images/noneData/Rectangle13.svg";
import img14 from "../../assets/images/noneData/Rectangle14.svg";
import img15 from "../../assets/images/noneData/Rectangle15.svg";
import NavSearch from "../../components/NavSearch/NavSearch";

const MainPage = () => {
  const dispatch = useDispatch();

  // const arrImg = [img2, img6, img5, img6, img2, img4, img3, img5, img5, img1];
  const arrImg = [
    img11,
    img14,
    img11,
    img5,
    img7,
    img8,
    img9,
    img3,
    img5,
    img15,
  ];

  // удалить

  React.useEffect(() => {
    dispatch(
      getCategory(
        "http://kover-site.333.kg/get_estab_category?category_type=main"
      )
    );
    /// все категории (магазины,рестораны)
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.mainBlock}>
      <NavSearch />
      <SliderMain />
      <MainContent arrImg={arrImg} />
    </div>
  );
};

export default MainPage;
