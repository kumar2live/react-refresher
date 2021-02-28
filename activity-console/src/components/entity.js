import React from "react";

import "./entity.scss";

const Entity = ({ name, status }) => {
  return <div className={`d-flex p-2 m-2 ${status}`}>{name}</div>;
};

export default Entity;
