import React from "react";
import "./billing.scss";
import { ReactComponent as Product } from "../../assets/img/product.svg";
import { ReactComponent as Car } from "../../assets/img/car.svg";
import { ReactComponent as Shield } from "../../assets/img/shield.svg";
import { ReactComponent as Wallet } from "../../assets/img/wallet.svg";

function Billing() {
  return (
    <div className="main__container">
      <div className="bills_container">
        <div className="buy_with_discount">
          <p>Купить со скидкой</p>
        </div>
      </div>

      <div className="product_characteristic">
        <Product />
        <div className="product__content">
          <p className="product__header">Технические характеристики</p>
          <p className="product__description">
            Мощность по ступеням: 750/1500 Вт <br /> Параметры электросети:
            220-240/50 В <br />
            Частота тока: 50 Гц <br /> Степень защиты: IP20 <br /> Площадь
            обогрева: до 20 <br /> Размер: 28х19х15 см <br /> Гарантия: 1 год{" "}
            <br /> Комплектация: Обогреватель, инструкция
          </p>
        </div>
      </div>

      <div className="delivery__header">
        <hr className="redline" />
        <p className="delivery__title">Доставка и оплата</p>
        <hr className="redline" />
      </div>

      <div className="delivery_cards__wrapper">
        <div className="warning__background delivery_cards_box">
          {/* <img src={temp} alt="temp" /> */}
          <Car />

          <p>Доставка почтой в течение 3-7 рабочих дней в зависимости от рег</p>
        </div>

        <div className="success__background delivery_cards_box">
          <Wallet />
          <p>Оплата заказов осуществляется по факту получения товара</p>
        </div>

        <div className="danger__background delivery_cards_box">
          <Shield />

          <p>Мы всегда проверяем товар перед отправкой</p>
        </div>
      </div>
    </div>
  );
}

export default Billing;
