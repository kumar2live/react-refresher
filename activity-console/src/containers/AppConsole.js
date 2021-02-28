import React from "react";

import axios from "axios";

import * as timez from "countries-and-timezones";
import { useEffect } from "react";
import EntityContainer from "./EntityContainer";

function AppConsole() {
  return (
    <div>
      <EntityContainer title="T24" />
      <EntityContainer title="External Links" />
    </div>
  );
}

export default AppConsole;
