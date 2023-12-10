import React from 'react';
import logo from '../../assets/images/Logo.png';
import styles from './Login.module.scss';
import { NavLink } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { addSession, changeDataUser } from '../../store/reducers/accountSlice';
import { useDispatch, useSelector } from 'react-redux';
import { sendNumAuth } from '../../store/reducers/postRequestSlice';
import ConfirmNum from '../../components/LoginPage/ConfirmNum/ConfirmNum';

const Login = () => {
  const [stateSendNum, setStateSendNum] = React.useState(1); // уровни логинизации
  const [endTime, setEndTime] = React.useState(true);
  const [time, setTime] = React.useState('03:00');

  const dispatch = useDispatch();

  const { dataUser } = useSelector((state) => state.accountSlice);

  React.useEffect(() => {
    const uniqueNumber = Math.floor(Math.random() * Date.now());
    dispatch(addSession(uniqueNumber));
  }, []);

  const changeInput = (e) => {
    e.preventDefault();
    dispatch(changeDataUser({ ...dataUser, [e.target.name]: e.target.value }));
  };

  // console.log(stateSendNum);
  // console.log(dataUser, 'dataUser');

  /////////////////////////////////////////////

  ///////////////////////////////////
  const sendNum = (e) => {
    e.preventDefault();
    const phoneNumberPattern = /^\+\d{3}\(\d{3}\)\d{2}-\d{2}-\d{2}$/;
    if (phoneNumberPattern.test(dataUser?.numberPhone)) {
      dispatch(sendNumAuth(dataUser));
      setStateSendNum(2);
      setTime('03:00');
    }
  };

  return (
    <div className={styles.login}>
      <div className="container">
        <div className={styles.login__inner}>
          <div className="logoImg">
            <img src={logo} alt="logo" />
          </div>
          <h1>Ковёр-Самолёт доставит всё!</h1>
          <p>Доставка обедов, продуктов, напитков, медикаментов и цветов</p>
          {/* //////////login1////////// */}
          {stateSendNum === 1 && (
            <form className={styles.formSendNum} onSubmit={sendNum}>
              <InputMask
                mask="+999(999)99-99-99"
                placeholder="+996(700)75-44-54"
                name="numberPhone"
                onChange={changeInput}
                required
                value={dataUser.numberPhone}
              />
              <button className="standartBtn" type="submit">
                Отправить код
              </button>
              <label>Мы вышлем код подтверждения в SMS на ваш мобильный.</label>
            </form>
          )}
          {/* ///////////////login2/////////////// */}
          {stateSendNum === 2 && (
            <ConfirmNum
              setEndTime={setEndTime}
              time={time}
              setTime={setTime}
              endTime={endTime}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
