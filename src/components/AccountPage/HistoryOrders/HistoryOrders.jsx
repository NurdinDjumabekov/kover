import React from "react";
import styles from "./HistoryOrders.module.scss";
import goods from "../../../assets/images/noneData/foodsss.png";
import { useDispatch, useSelector } from "react-redux";
import { historyOrders } from "../../../store/reducers/requestFoodSlice";
import {
  changeError,
  changeGoodSent,
  changeLoading,
  sendOrderFoodsRepeat,
} from "../../../store/reducers/postRequestSlice";
import { transformNumber } from "../../../helpers/transformNumber";
import { useNavigate } from "react-router-dom";

export const HistoryOrders = ({ setStateModal, setIdCounter }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dataUser } = useSelector((state) => state.accountSlice);
  const { dataHistory } = useSelector((state) => state.requestFoodSlice);
  // console.log(dataHistory, "dataHistory");
  // console.log(dataUser, "dataUser");

  React.useEffect(() => {
    dispatch(historyOrders(dataUser?.idUser));
  }, []);

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const date = dateTime.toLocaleDateString(); // Форматирую дату
    const time = dateTime.toLocaleTimeString(); // Форматирую время
    return `${date} в ${time}`;
  };

  const repeatOrders = (id) => {
    dispatch(
      sendOrderFoodsRepeat({
        client_phone: transformNumber(dataUser?.numberPhone),
        client_fio: dataUser?.name,
        client_address: [
          dataUser?.contacts?.[0] || "",
          dataUser?.contacts?.[1] || "",
          dataUser?.contacts?.[2] || "",
        ],
        codeid: +id,
      })
    );

    setTimeout(() => {
      dispatch(changeError(false));
      dispatch(changeLoading(false));
      dispatch(changeGoodSent(false));
      navigate("/main");
    }, 4000);
  };

  return (
    <ul className={styles.history}>
      <li>
        <h5>История заказов</h5>
      </li>
      {dataHistory?.length === 0 ? (
        <li className={styles.noneData}>Список пуст</li>
      ) : (
        dataHistory?.map((food, ind) => (
          <li key={ind}>
            <div className={styles.viewFood}>
              <img src={goods} alt="временно" />
              <div>
                <span>{food.zakaz_status}</span>
                <p>Заказ {formatDateTime(food.zakaz_date)}</p>
                <b>{food.establishment_name}</b>
              </div>
            </div>
            <div className={styles.moreInfo}>
              <p>{food.zakaz_summ} сом</p>
              <button
                className="standartBtn"
                onClick={() => {
                  setIdCounter(food.codeid);
                  setStateModal(true);
                }}
              >
                Подробно
              </button>
              <button onClick={() => repeatOrders(food.codeid)}>
                Повторить
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};
