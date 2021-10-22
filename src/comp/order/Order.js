import React from "react";
import "./order.scss";
import productImg from "../../assets/img/heater.png";

import { ReactComponent as RedCross } from "../../assets/img/red_cross.svg";

function Order() {
  return (
    <div className="order__wrapper">
      <div className="main__container">
        <div className="order_title_container">
          <p className="order_title">Закажите сегодня и получите скидку</p>
        </div>
      </div>
      <div className="order__main_content">
        <img src={productImg} alt="productImg" />
        <div className="order__header_container">
          <div className="main">
            <div className="order_title_main warning__background ">
              <p>Портативный обогреватель</p>
            </div>
          </div>

          <div className="secondary">
            <div className="order_title_secondary danger__background ">
              <p>создан для вашего комфорта</p>
            </div>
          </div>
        </div>

        <div className="main__container">
          <form action="form__wrapper" className="form__wrapper">
            <div className="form__conatiner">
              <div className="discount_wrapper">
                <div className="discount_container">
                  <div className="old_price_container">
                    <RedCross />
                    <p className="price_text">
                      Обычная цена:
                      <br />
                      <span className="old_price">63617 тг</span>
                    </p>
                  </div>
                  <div className="new_price_container">
                    <p className="price_text">
                      Цена сегодня:
                      <br />
                      <span className="new_price"> 29900тг</span>
                    </p>
                  </div>
                </div>
              </div>
              <input type="text" placeholder="Ваше имя" />
              <input type="tel" placeholder="Номер телефона" />
              <button type="submit">Оформить заказ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Order;
