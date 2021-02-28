import { AudioProvider } from "./app-contexts/AudioContext";
import "./App.scss";

import AppConsole from "./containers/AppConsole";

function App() {
  // console.log("timez: ", timez.getTimezonesForCountry("HK"));

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3005/blogPosts")
  //     .then((d) => console.log(d))
  //     .catch((e) => console.log(e));
  // }, []);

  return (
    <div className="App">
      <AudioProvider>
        <AppConsole />
      </AudioProvider>
    </div>
  );
}

export default App;
