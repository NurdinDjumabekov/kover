import React from 'react';
import Modals from '../../Modals/Modals';
import './EditUser.scss';

const EditUser = (props) => {
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
          <button>Сменить</button>
        </div>
        <button className="standartBtn">Сохранить изменения</button>
      </div>
    </Modals>
  );
};

export default EditUser;
