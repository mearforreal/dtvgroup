import React from "react";

function BannerTitle() {
  return (
    <div className="sub_title_wrapper">
      {/* Title */}

      <div className="banner_title_main warning__background ">
        <p>Портативный обогреватель</p>
      </div>
      <div className=" banner_title_secondary danger__background ">
        <p>создан для вашего комфорта</p>
      </div>
    </div>
  );
}

export default BannerTitle;
