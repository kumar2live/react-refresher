import React from "react";

import EntityContainer from "./EntityContainer";
import Header from "./Header";

const T24Entities = [
  { entityName: "TSM", status: "online" },
  { entityName: "TCS", status: "online" },
  { entityName: "SWIFT IN", status: "online" },
  { entityName: "SWIFT OUT", status: "offline" },
];

const ExternalLinksEntities = [
  { entityName: "Thomson Reutres", status: "online" },
  { entityName: "Cartex", status: "online" },
  { entityName: "Bloomberg", status: "online" },
];

function AppConsole({ data }) {
  console.log("data: ", data);

  return (
    <div>
      <Header />

      <div className="d-flex justify-content-start">
        <div className="p-2" style={{ minWidth: "350px" }}>
          <EntityContainer title="T24" entities={T24Entities} />
        </div>
        <div className="p-2" style={{ minWidth: "350px" }}>
          <EntityContainer
            title="External Links"
            entities={ExternalLinksEntities}
          />
        </div>
      </div>
    </div>
  );
}

export default AppConsole;
