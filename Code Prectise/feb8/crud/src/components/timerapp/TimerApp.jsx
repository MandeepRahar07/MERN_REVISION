import React, { useEffect, useState } from 'react';

function TimerApp() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // ✅ correct way
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handlePause = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Timer App</h1>
      <h2>{time} sec</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TimerApp;
