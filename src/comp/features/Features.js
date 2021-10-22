import React from "react";
import "./features.scss";
import familySvg from "../../assets/img/family.svg";
import happySvg from "../../assets/img/happy.png";
import ker from "../../assets/img/ker.png";
import shape from "../../assets/img/shape.png";
import { ReactComponent as Heat } from "../../assets/img/heat.svg";
import { ReactComponent as Compact } from "../../assets/img/compact.svg";
import { ReactComponent as Cold } from "../../assets/img/cold.svg";
import { ReactComponent as Shield } from "../../assets/img/shield2.svg";
import { ReactComponent as Idea } from "../../assets/img/idea.svg";
import { ReactComponent as Fire } from "../../assets/img/fire.svg";

function Features() {
  return (
    <div className="feature__wrapper">
      <div className="main__container">
        <div className="feature__title_wrapper">
          <p>Главные особенности</p>
        </div>
        <p className="feature__subtitle">
          Почему все выбирают эту модель обогревателя?
        </p>
        <div className="hexGrid">
          <div className="hexGridA">
            <div className="hexTopMedium__wrapper">
              <div className="hex medium orange"></div>
            </div>

            <div className="hex large">
              <img src={familySvg} alt="family" />
            </div>
            <div className="hex large">
              <img src={shape} alt="shape" />
            </div>
          </div>
          <div className="hexGridB">
            <div className="hex large yellow">
              <div className="hex__container">
                <div className="first_line">
                  <p className="number">02.</p>
                  <Shield />
                </div>

                <p className="text">Защита от перегрева</p>
              </div>
            </div>
            <div className="hex large yellow">
              <div className="hex__container">
                <div className="first_line">
                  <p className="number">04.</p>
                  <Idea />
                </div>
                <p className="text">Необычный дизайна</p>
              </div>
            </div>
            <div className="hex large orange">
              <div className="hex__container">
                <div className="first_line">
                  <p className="number">06.</p>
                  <Fire />
                </div>
                <p className="text">Керамический нагрев</p>
              </div>
            </div>
          </div>
          <div className="hexGridA">
            <div className="hex large orange">
              <div className="hex__container">
                <div className="first_line">
                  <p className="number">01.</p>
                  <Heat />
                </div>
                <p className="text">2 режима работы на обогрев</p>
              </div>
            </div>
            <div className="hex large yellow">
              <div className="hex__container">
                <div className="first_line">
                  <p className="number">03.</p>
                  <Compact />
                </div>
                <p className="text">Компактный размер</p>
              </div>
            </div>
            <div className="hex large orange">
              <div className="hex__container">
                <div className="first_line">
                  <p className="number">05.</p>
                  <Cold />
                </div>
                <p className="text">Режим холодного обдува</p>
              </div>
            </div>
          </div>
          <div className="hexGridB">
            <div className="hex large">
              <img src={happySvg} alt="family" />
            </div>
            <div className="hex large">
              <img src={ker} alt="family" />
            </div>
            <div className="hexBottomMedium_wrapper">
              <div className="hex medium_bottom yellow"></div>
              <div className="hex small yellow"></div>
            </div>
          </div>
          <div className="hexGridC">
            <div className="hex small orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
