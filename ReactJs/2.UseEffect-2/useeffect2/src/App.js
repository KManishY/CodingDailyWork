import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import StopWatch from "./components/StopWatch";
import DisplayWidth from "./components/DisplayWidth.jsx";
const App = () => {
      return (
            <div className="App">
                  <Timer />
                  {/* <Todos /> */}
                  {/* <StopWatch /> */}
                  {/* <DisplayWidth /> */}
            </div>
      );
};

export default App;
