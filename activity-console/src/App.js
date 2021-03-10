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
    axios
      .get("http://localhost:3005/consoleStatus")
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const [intervalDuration, setIntervalDuration] = useState(5000);
  const [intervalID, setIntervalID] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIntervalID(
      setInterval(() => {
        getData();
      }, intervalDuration)
    );

    return () => clearInterval(intervalID);
  }, [intervalDuration]);

  return (
    <div className="App">
      <AudioProvider>{data && <AppConsole data={data} />}</AudioProvider>
    </div>
  );
}

export default App;
