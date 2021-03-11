import React from "react";
import CountryTime from "./CountryTime";
import Select from "react-select";

function Header({ setSelectedOptions }) {
  const reloadOptions = [
    { value: 10000, label: "10 Mins" },
    { value: 20000, label: "20 Mins" },
    { value: 30000, label: "30 Mins" },
  ];

  return (
    <div className="d-flex flex-column mb-3">
      <div className="">
        <div className="d-flex justify-content-between">
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
                <CountryTime
                  timezone="Asia/Hong_Kong"
                  countryName="HK, SG, KL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 w-25">
        <div className="d-flex flex-row justify-content-between">
          <div className="px-2 d-flex text-white align-items-center">
            Auto Re-Load in
          </div>
          <div className="p-2 flex-fill">
            <Select
              defaultValue={reloadOptions[0]}
              onChange={setSelectedOptions}
              options={reloadOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
