import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { AudioProvider } from "./app-contexts/AudioContext";
import "./App.scss";

import AppConsole from "./containers/AppConsole";

function App() {
  useEffect(() => {
    // getData();
  }, []);

  const getData = useCallback(() => {
    console.log("calling api");
    axios
      .get("http://localhost:3005/blogPosts")
      .then((d) => {
        console.log(d);
        setData(d);
      })
      .catch((e) => console.log(e));
  }, []);

  const [intervalDuration, setIntervalDuration] = useState(3000);
  const [intervalID, setIntervalID] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("in app");

    setIntervalID(
      setInterval(() => {
        getData();
      }, intervalDuration)
    );

    console.log("intervalID: ", intervalID);
    return () => clearInterval(intervalID);
  }, [intervalDuration]);

  return (
    <div className="App">
      <AudioProvider>
        <AppConsole data={data}/>
      </AudioProvider>
    </div>
  );
}

export default App;
