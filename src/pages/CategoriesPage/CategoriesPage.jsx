import React from "react";
import styles from "./CategoriesPage.module.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/reducers/requestFoodSlice";
import Preloader from "../../components/Preloader/Preloader";
import ordering from "../../assets/images/Main/ordering.svg";
import delivery from "../../assets/images/Main/delivery.svg";
import {
  changeActiveType,
  changePathCatalog,
} from "../../store/reducers/statesSlice";

import img1 from "../../assets/images/noneData/everyFood.svg";
import img2 from "../../assets/images/noneData/Rectangle8.svg";
import img3 from "../../assets/images/noneData/Rectangle7.svg";
import img4 from "../../assets/images/noneData/Rectangle8.svg";
import img5 from "../../assets/images/noneData/Rectangle6.svg";
import img6 from "../../assets/images/noneData/Rectangle3.svg";
import img7 from "../../assets/images/noneData/Rectangle9.svg";
import img8 from "../../assets/images/noneData/Rectangle10.svg";
import img9 from "../../assets/images/noneData/alkogol.jpg";
import img10 from "../../assets/images/noneData/drinkSpirt.png";
import SliderMain from "../../components/SliderMain/SliderMain";
import NavSearch from "../../components/NavSearch/NavSearch";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { allCategory } = useSelector((state) => state.requestFoodSlice);

  const arrImg = [img2, img3, img2, img6, img7, img8, img10, img3, img5, img1];
  // удалить

  React.useEffect(() => {
    dispatch(
      getCategory(
        "http://kover-site.333.kg/get_estab_category?category_type=main"
      )
    );
    window.scrollTo(0, 0);
  }, []);

  const clickEstablishment = (name) => {
    dispatch(changePathCatalog(name));
    localStorage.setItem("pathCatalog", name);
    dispatch(changeActiveType(0));
  };

  // console.log(allCategory, "allCategory");

  return (
    <>
      <div className={styles.caregoryBlock}>
        <NavSearch />
        <SliderMain />
        <div className="container">
          <div className={styles.caregoryBlock__inner}>
            <NavLink
              to={`/detailed/${"0"}/${"Рестораны"}`}
              className={styles.everyCategory}
              onClick={() => clickEstablishment("Рестораны")}
            >
              <h4>Рестораны</h4>
              <img src={arrImg[9]} alt="Рестораны" />
            </NavLink>
            {allCategory?.length === 0 ? (
              <Preloader />
            ) : (
              allCategory?.map((i, ind) => (
                <NavLink
                  to={`/detailed/${i.codeid}/${i.category_name}`}
                  key={i.codeid}
                  className={styles.everyCategory}
                  onClick={() => clickEstablishment(i?.category_name)}
                >
                  <h4>{i.category_name}</h4>
                  <img src={arrImg[ind]} alt="категория" />
                </NavLink>
              ))
            )}
            <NavLink
              to={`/delivery`}
              className={styles.everyCategory}
              onClick={() => clickEstablishment("Курьерская доставка")}
            >
              <h4>Курьерская доставка</h4>
              <img src={delivery} alt="delivery" />
            </NavLink>
            <NavLink
              to={`/listorder`}
              className={styles.everyCategory}
              onClick={() => clickEstablishment("Доставка с гипермаркетов")}
            >
              <h4>Доставка с гипермаркетов</h4>
              <img src={ordering} alt="ordering" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
