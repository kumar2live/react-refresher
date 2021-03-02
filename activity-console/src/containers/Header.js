import React from "react";
import CountryTime from "./CountryTime";

function Header() {
  return (
    <div className="d-flex justify-content-between mb-3">
      <div className="p-2 text-white">
        <div className="d-flex flex-column">
          <div className="p-1 app-header">T24 MONITORING CONSOLE</div>
          <div className="">
            <CountryTime timezone="Asia/Kolkata" type="single" />
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="d-flex justify-content-start">
          <div className="p-1">
            <CountryTime timezone="Greenwich" countryName="JE, UK" />
          </div>
          <div className="p-1">
            <CountryTime timezone="Asia/Hong_Kong" countryName="HK, SG, KL" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
