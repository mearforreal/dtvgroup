import React from "react";
import "./banner.scss";
import { ReactComponent as Heater } from "../../assets/img/heater.svg";
import Cards from "./Cards";
import BannerTitle from "./BannerTitle";
import { ReactComponent as Hair } from "../../assets/img/hair.svg";

function Banner() {
  return (
    <div>
      <div className="banner__backround danger__background">
        <div className="banner_product_img">
          <Heater />
        </div>
        <div className="banner_main_img">
          {/* Title */}
          <Hair />
          <div className="banner_title_wrapper">
            <BannerTitle />
          </div>

          {/* Backgroun Images */}
        </div>
        <div className="main__container">
          <div className="slogan_conatiner">
            <div className="slogan_wrapper">
              <div className="banner_slogan">
                <p>Универсальное устройство для дома и офиса </p>
              </div>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
