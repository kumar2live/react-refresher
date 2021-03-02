import React from "react";
import Clock from "react-live-clock";

// imports
// import * as timez from "countries-and-timezones";

// Date formatting
// https://momentjs.com/docs/#/displaying/format/

// Timezone list:
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

function CountryTime({ timezone, countryName, type }) {
  const singleLine = (
    <div>
      <Clock format={"D MMM YYYY - hh:mm A, dddd"} timezone={timezone} />
    </div>
  );

  if (type && type === "single") {
    return singleLine;
  }

  return (
    <div className="d-flex flex-column mb-3 text-white">
      <div className="">
        <Clock format={"D MMM YYYY"} />
      </div>
      <div className="">
        <div className="text-white time-display">
          <Clock format={"hh:mm  A"} ticking={true} timezone={timezone} />
        </div>
      </div>
      <div className="">{countryName}</div>
    </div>
  );
}

export default CountryTime;
