import React, { useState, useEffect } from "react";

const Timer = () => {
      const [time, setTime] = useState(0);
      const [endTime, setEndTime] = useState(0);
      // const onHandleChange = () => {};
      useEffect(() => {
            const id = setInterval(() => {
                  if (endTime <= time) {
                        clearInterval(id);
                  } else {
                        setTime((time) => time + 1);
                  }
            }, 1000);
            return () => clearInterval(id);
      }, [time, endTime]);
      return (
            <>
                  <div>
                        <span>Initial Time</span>
                        <input
                              type="text"
                              onChange={(e) => setTime(+e.target.value)}
                        />{" "}
                        <br />
                        <span>End Time</span>
                        <input
                              type="text"
                              onChange={(e) => setEndTime(+e.target.value)}
                        />
                        <br />
                        <h1>Timer:{time}</h1>
                        {/* <button onClick={onHandleChange}>Start</button> */}
                  </div>
            </>
      );
};
export default Timer;
