import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // update with current time
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Real-Time Clock</h1>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Timer;