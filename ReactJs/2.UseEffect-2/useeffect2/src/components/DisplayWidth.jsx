import React, { useState, useEffect } from "react";

const DisplayWidth = () => {
      const [Width, setWidth] = useState(window.screen.width);
      const actualWidth = () => {
            setWidth(window.innerWidth);
      };
      useEffect(() => {
            window.addEventListener("resize", actualWidth);
            return () => {
                  window.removeEventListener("resize", actualWidth);
            };
      }, []);
      return (
            <>
                  <h1>The Actual Size of my Window</h1>
                  <h1>{Width}</h1>
            </>
      );
};

export default DisplayWidth;
