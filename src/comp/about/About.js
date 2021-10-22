import React from "react";
import "./about.scss";
import productImg from "../../assets/img/heater.svg";

function About() {
  return (
    <div className="about__wrapper">
      <div className="about__description">
        <div className="main__container about__description__container">
          <p className="about__header">Подробнее о керамическом обогревателе</p>
          <p className="about__content">
            Портативный обогреватель – это надежное устройство из класса
            климатической техники, которое будет максимально полезно в этом
            году.
            <br /> В теплое время года данную модель можно использовать в
            качестве вентилятора благодаря соответствующему режиму. <br /> В
            представленном устройстве используется керамический нагревательный
            элемент, основными достоинствами которой является быстрый нагрев,
            бесшумная работа и энергосбережение.
          </p>
        </div>
      </div>

      <div className="about_product_img">
        <img src={productImg} alt="productImg" />
      </div>
    </div>
  );
}

export default About;
