import React from 'react';
import './EditNumber.scss';
import Modals from '../../Modals/Modals';
import InputMask from 'react-input-mask';

const EditNumber = (props) => {
  const sendData = (e) => {
    e.preventDefault();
    props.changeState(false);
    setTimeout(() => {
      props.more(true);
    }, 400);
  };
  return (
    <Modals
      state={props.state}
      title={'Смена номера'}
      changeState={props.changeState}
    >
      <div className="editNumber">
        <form>
          <InputMask
            mask="+999(999)99-99-99"
            placeholder="+996(700)75-44-54"
            // value={}
            name="number"
            // onChange={changeInput}
            required
          />
          <button type="submit" className="standartBtn" onClick={sendData}>
            Отправить код
          </button>
          <label>Мы вышлем код подтверждения в SMS на ваш мобильный.</label>
        </form>
      </div>
    </Modals>
  );
};

export default EditNumber;
