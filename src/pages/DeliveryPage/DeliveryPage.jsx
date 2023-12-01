import React from 'react';
import styles from './DeliveryPage.module.scss';

const DeliveryPage = () => {
  return (
    <div className={styles.deliveryMain}>
      <div className="container">
        <div className={styles.deliveryMain__inner}>
          <h4>
            Личный <i>курьер</i>
          </h4>
          <h5>
            Отправьте нам список покупок и мы доставим всё к вам домой через 3
            часа!
          </h5>
          <p>
            Основной принцип нашей работы — доставка «из рук в руки». Услуга
            личный курьер – это гарантия того, что заказчик получит свою
            доставку вовремя. Мы несем ответственность за перевозимые товары. Во
            всех случаях один ответ – "Служба Доставки".{' '}
          </p>
          <p>
            Вот решение, которое Вы искали. И которое мы с удовольствием можем
            Вам предложить. Сделайте заказ и наш сотрудник в минимальный срок,
            быстро и надежно, будет стоять у Вашей двери с доставкой.
          </p>
          <h6>Доставка от 200 сом</h6>
          <form className={styles.nnn}>
            <label>Отправитель</label>
            <input type="text" required placeholder="Телефон" name="" />
            <input type="text" required placeholder="ФИО" name="" />
            <label>Откуда забрать</label>
            <input type="text" required placeholder="Адрес" name="" />
            <input type="text" required placeholder="Квартира и этаж" name="" />
            <input type="text" required placeholder="Время" name="" />
            <label>Куда доставить</label>
            <input type="text" required placeholder="Адрес" name="" />
            <input type="text" required placeholder="Квартира и этаж" name="" />
            <input type="text" required placeholder="Время" name="" />
            <label>Описание груза</label>
            <input
              type="text"
              required
              placeholder="Комментарий к заказу"
              name=""
            />

            <input
              type="checkbox"
              id="moreBigGood"
              placeholder="Габаритный груз свыше 20 кг или больше 1х1х1м"
            />
            <label id="moreBigGood">
              Габаритный груз свыше 20 кг или больше 1х1х1м
            </label>

            <label id="checkboxCard">
              <input type="checkbox" name="myCheckbox" id="checkboxCard" />
              Картой
            </label>
            <label id="checkboxNoCard">
              <input type="checkbox" name="myCheckbox" id="checkboxNoCard" />
              Картой
            </label>

            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
