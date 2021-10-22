import React from "react";

import { ReactComponent as Temp } from "../../assets/img/temperatures.svg";
import { ReactComponent as Meter } from "../../assets/img/thermometer.svg";
import { ReactComponent as Controls } from "../../assets/img/controls.svg";

function Cards() {
  return (
    <div className="cards__wrapper">
      <div className="warning__background cards_box">
        {/* <img src={temp} alt="temp" /> */}
        <Temp />
        <p>автоматическая регулировка оптимальной температуры</p>
      </div>

      <div className="success__background cards_box">
        <Meter />
        <p>автоматическая регулировка оптимальной температуры</p>
      </div>

      <div className="danger__background cards_box">
        <Controls />
        <p>автоматическая регулировка оптимальной температуры</p>
      </div>
    </div>
  );
}

export default Cards;
