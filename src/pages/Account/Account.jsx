import React from 'react';
import styles from './Account.module.scss';
import { HistoryOrders } from '../../components/AccountPage/HistoryOrders/HistoryOrders';
import edit from '../../assets/icons/edit.svg';
import LogOut from '../../components/AccountPage/LogOut/LogOut';
import Modals from '../../components/Modals/Modals';
import goods from '../../assets/images/noneData/foodsss.png';
import './styles.scss';
import EditUser from '../../components/AccountPage/EditUser/EditUser';
import Contacts from '../../components/AccountPage/Contacts/Contacts';

const Account = () => {
  const [stateModal, setStateModal] = React.useState(false);
  const [editData, setEditData] = React.useState(false);
  const [contacts, setContacts] = React.useState(false);

  const arrDataHistory = [
    {
      id: 1,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 2,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 3,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 4,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 5,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
    {
      id: 6,
      img: goods,
      title: 'Ресторан Фаиза',
      price: '680 сом',
      status: 'В доставке',
      historyTime: 'Заказ 08.09.2023 в 12:54',
    },
  ];

  return (
    <div className={styles.accountBlock}>
      <div className="container">
        <div className={styles.accountBlock__inner}>
          <button className={styles.profile}>
            <h3>Профиль</h3>
            <img src={edit} alt="edit" />
          </button>
          <h4>Рассул Маулов</h4>
          <p>0 (553) 93-16-11</p>
          <div className={styles.editLocation}>
            <span>Киевская улица, 71</span>
            <button onClick={() => setEditData(true)}>Изменить</button>
          </div>
          <button
            className={styles.btnContact}
            onClick={() => setContacts(true)}
          >
            Контакты
          </button>
          <LogOut />
          <HistoryOrders setStateModal={setStateModal} />
          <Modals
            state={stateModal}
            title={'Заказ 08.09.2023 в 12:54'}
            changeState={setStateModal}
          >
            <div className="historyModal">
              <p>Заказ создан</p>
              <div>
                <span>680 сом</span>
                <div>
                  <p>Ресторан Фаиза</p>
                  <i>5 позиций</i>
                </div>
              </div>
              <ul>
                {arrDataHistory?.map((i) => (
                  <li key={i.id}>
                    <div className="food">
                      <img src={i.img} alt="" />
                    </div>
                    <div className="mainContent">
                      <p>{i.title}</p>
                      <span>{i.price}</span>
                    </div>
                    <div className="price">
                      <p>{i.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Modals>
          <EditUser state={editData} changeState={setEditData} />
          <Contacts state={contacts} changeState={setContacts} />
        </div>
      </div>
    </div>
  );
};

export default Account;
