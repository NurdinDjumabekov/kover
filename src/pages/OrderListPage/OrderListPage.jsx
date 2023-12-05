import React from 'react';
import styles from './OrderListPage.module.scss';

const OrderListPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.orderList}>
      <div className="container">
        <div className={styles.orderList__inner}>
          <h4>
            Нет времени <i> оформлять доставку?</i>
          </h4>
          <h5>
            Отправьте нам список покупок и мы доставим всё к вам домой через 3
            часа!
          </h5>
          <p>
            Мы работаем с большим количеством партнеров, чтобы предложить вам
            широкий выбор продуктов и услуг. Вы можете заказать еду из
            разнообразных ресторанов, включая итальянскую, японскую, китайскую
            кухни и многое другое.
          </p>
          <p>
            Мы также предлагаем доставку товаров из магазинов, аптек и других
            учреждений - все, что вам может понадобиться для вашего
            повседневного рутинного покупок.
          </p>
          <h6>Доставка от 200 сом</h6>
          <form>
            <label>Отправитель</label>
            <input type="text" required placeholder="Телефон" name="" />
            <input type="text" required placeholder="ФИО" name="" />

            <label>Доставка</label>
            <input type="text" required placeholder="Адрес" name="" />
            <input type="text" required placeholder="Время" name="" />

            <label>Оплата</label>
            {/* <div>
              <label id="checkboxCard">
                <input type="checkbox" name="myCheckbox" id="checkboxCard" />
                Картой
              </label>
              <label id="checkboxNoCard">
                <input type="checkbox" name="myCheckbox" id="checkboxNoCard" />
                Наличкой
              </label>
            </div> */}

            <input
              type="text"
              required
              placeholder="Нужна сдача с..."
              name=""
            />
            <label>Комментарий к заказу</label>
            <input
              type="text"
              required
              placeholder="Комментарий к заказу"
              name=""
            />

            <div className="line"></div>

            <div>
              <h6>Список покупок</h6>
            </div>

            {/* /// тут надо попохже добавить */}

            <button type="submit" className="standartBtn">
              Оформить заказ
            </button>
            <p>
              После оформления заказа наши менеджеры свяжутся с вами для
              уточнения деталей!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderListPage;
