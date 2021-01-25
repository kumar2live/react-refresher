import React from "react";
import ReactDOM from "react-dom";
// import Test from "./app/test";

import image from "./assets/react.png";
import "./styles.scss";

const App = () => {
  return (
    <>
      <p>Hello there! it's working with different path running in - {process.env.NODE_ENV}</p>

      <img src={image} height={200} width={400} />

      {/* <Test /> */}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
