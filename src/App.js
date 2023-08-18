import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisecond, setMilisecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (milisecond >= 990) {
          setMilisecond(0);
          setSecond(prevSecond => prevSecond + 1);
        } else {
          setMilisecond(prevMilisecond => prevMilisecond + 10);
        }

        if (second >= 60) {
          setSecond(0);
          setMinute(prevMinute => prevMinute + 1);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, milisecond, second]);

  function startCounting() {
    setIsRunning(true);
  }

  function clearCounting() {
    setIsRunning(false);
    setMinute(0);
    setSecond(0);
    setMilisecond(0);
  }

  function pauseCounting() {
    setIsRunning(false);
  }

  return (
    <div className="container">
      <h1>Cronômetro</h1>
      <div className='timer'>
        <div className='box-count'>
          <h2>{minute.toString().padStart(2, '0')}</h2>
          <h2>{second.toString().padStart(2, '0')}</h2>
          <h2>{milisecond.toString().padStart(3, '0')}</h2>
        </div>
        <div className='btn-control'>
          <button onClick={isRunning ? pauseCounting : startCounting} className={isRunning ? 'yellow' : 'green'}>
            {isRunning ? 'PAUSE' : 'START / RESUME'}
          </button>
          <button onClick={clearCounting} className='red'>
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;