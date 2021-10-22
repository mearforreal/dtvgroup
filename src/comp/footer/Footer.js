import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer__container">
        <div className="first_part">
          <p>Политика конфиденциальности</p>
          <p>Пользовательское соглаш</p>
        </div>
        <div className="second_part">
          <p>ИП «YourCareer»</p>
          <p>Адрес: проспект Аль-фараби 17, Алматы 050010, Казахстан</p>

          <p>ИНН: 970225301121</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
