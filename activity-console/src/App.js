import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

import { AudioProvider } from "./app-contexts/AudioContext";
import "./App.scss";

import AppConsole from "./containers/AppConsole";

const reloadOptions = [
  { value: 10000, label: "10 Mins" },
  { value: 20000, label: "20 Mins" },
  { value: 30000, label: "30 Mins" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(10000);

  const getData = useCallback(() => {
    axios
      .get("http://localhost:3005/consoleStatus")
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => console.log(e));
  }, []);

  // const [intervalDuration, setIntervalDuration] = useState(50000);
  const [intervalID, setIntervalID] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    clearInterval(intervalID);

    const localInterval = setInterval(() => getData(), selectedOption);
    setIntervalID(localInterval);

    return () => clearInterval(intervalID);
  }, [selectedOption]);

  const setSelectedOptions = (e) => setSelectedOption(e.value);

  return (
    <div className="App">
      <AudioProvider>
        {data && (
          <AppConsole data={data} setSelectedOptions={setSelectedOptions} />
        )}
      </AudioProvider>
    </div>
  );
}

export default App;
