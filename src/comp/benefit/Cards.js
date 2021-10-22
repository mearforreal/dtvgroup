import React from "react";
import "./benefits.scss";
import { ReactComponent as Boxes } from "../../assets/img/boxes/box_card.svg";

function Cards() {
  return (
    <div className="benefits_section_wrapper">
      <p>Преимущества теплонагревателя</p>
      <div className="box__wrapper">
        <div className="box__container">
          <Boxes />
        </div>
      </div>
    </div>
  );
}

export default Cards;
