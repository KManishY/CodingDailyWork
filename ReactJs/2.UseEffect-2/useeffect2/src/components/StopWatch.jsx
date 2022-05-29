import React from "react";
import { useState, useRef, useEffect } from "react";

const StopWatch = () => {
      const [watch, setWatch] = useState(0);
      // const [timerId, setTimerId] = useState();
      const timerId = useRef(null);
      // console.log(timerId.current);

      function start() {
            if (!timerId.current) {
                  let id = setInterval(() => {
                        setWatch((prev) => prev + 1);
                        // console.log(prev + 1);
                  }, 1000);
                  timerId.current = id;
                  // setTimerId(id);
            }
      }
      const stop = () => {
            clearInterval(timerId.current);
            timerId.current = null;
            // setTimerId(null);
      };
      const reset = () => {
            clearInterval(timerId.current);
            setWatch(0);
            timerId.current = null;
            // setTimerId(null);
      };
      useEffect(() => {
            return reset;
      }, []);

      return (
            <div>
                  <h2>StopWatch</h2>
                  <h1>{watch}</h1>
                  <div>
                        <button onClick={start}> start</button>
                        <button onClick={stop}> pause</button>
                        <button onClick={reset}> reset</button>
                  </div>
            </div>
      );
};

export default StopWatch;
