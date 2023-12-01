import React from 'react';
import Modals from '../../Modals/Modals';
import './EditUser.scss';

const EditUser = (props) => {
  const editNumber = () => {
    props.changeState(false);
    setTimeout(() => {
      props.more(true);
    }, 400);
  };
  return (
    <Modals
      state={props.state}
      title={'Редактирование профиля'}
      changeState={props.changeState}
    >
      <div className="editUser">
        <input type="text" placeholder="Нурдин Джумабеков" />
        <div>
          <p>0 (553) 93-16-11</p>
          <button onClick={editNumber}>Сменить</button>
        </div>
        <button className="standartBtn">Сохранить изменения</button>
      </div>
    </Modals>
  );
};

export default EditUser;
