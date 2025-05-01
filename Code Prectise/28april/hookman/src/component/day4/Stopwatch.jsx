import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(new Date());

  // Live clock update
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  // Stopwatch logic
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Stopwatch</h2>
      <h1>{formatTime(time)}</h1>
      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <h2>Current Date & Time</h2>
        <h4>{currentTime.toLocaleTimeString()}</h4>
      </div>
    </div>
  );
}

export default Stopwatch;
