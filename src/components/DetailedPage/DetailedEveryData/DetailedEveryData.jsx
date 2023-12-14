import React from 'react';
import './DetailedEveryData.scss';
import Modals from '../../Modals/Modals';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFoodsOrders,
  changeAllFoodsOrders,
  changePositionFoods,
  changeSumDishes,
  changeSumOrdersFoods,
  delfoodCount,
  discountFoods,
} from '../../../store/reducers/statesSlice';

const DetailedEveryData = (props) => {
  const dispatch = useDispatch();
  const { allFoodsOrders } = useSelector((state) => state.statesSlice);
  const data = props?.dataEvery;

  const handleCounter = (type) => {
    if (type === 'add') {
      dispatch(addFoodsOrders(data));
    } else if (type === 'del') {
      ///&& count > 0
      allFoodsOrders?.forEach((food) => {
        if (food.codeid === data?.codeid) {
          dispatch(discountFoods({ codeid: food.codeid }));
          dispatch(delfoodCount({ count: food.count }));
        }
      });
    }
    dispatch(changeSumOrdersFoods());
    dispatch(changePositionFoods());
    dispatch(changeSumDishes());
  };

  // console.log(props?.dataEvery, 'dataEvery');
  // console.log(allFoodsOrders, 'allFoodsOrders');

  return (
    <Modals
      state={props.state}
      title={data?.product_name}
      changeState={props.changeState}
    >
      <div className="everyProd">
        <div className="everyProd__img">
          <img src={data?.photo} alt="" />
        </div>
        <div className="everyProd__text">
          <p>{data?.product_price} сом</p>
          <span>
            {data?.v_ves} {data?.ves_name}
          </span>
        </div>
        <div className="everyProd__btns">
          <div>
            <button onClick={() => handleCounter('del')}>-</button>
            {/* <p>{item.count}</p> */}
            <p>555</p>
            <button onClick={() => handleCounter('add')}>+</button>
          </div>
          <button onClick={() => handleCounter('add')}>Добавить</button>
        </div>
        <h6>Описание</h6>
        {/* <b>{data?.establishment_name}</b> */}
        <b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia
          quam excepturi ab harum impedit veritatis quod tempora quaerat ratione
          provident eaque, vitae recusandae ex, distinctio et dolore possimus
          eveniet. Alias, nam ad quasi eveniet fuga accusamus enim! Qui sunt
          quam praesentium, dicta eos a nesciunt voluptatibus laudantium
          doloribus asperiores?
        </b>
      </div>
    </Modals>
  );
};

export default DetailedEveryData;
