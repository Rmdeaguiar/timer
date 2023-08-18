import './App.css';
import { useState } from 'react';

function App() {

  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisecond, setMilisecond] = useState(0);




  return (
    <div className="container">
      <h1>Cronômetro</h1>
      <div className='timer'>
        <div className='box-count'>
          <h2>{minute.toString().padStart(2, '0')}</h2>
          <h2>{second.toString().padStart(2, '0')}</h2>
          <h2>{milisecond.toString().padStart(2, '0')}</h2>
        </div>
        <div className='btn-control'>
        <button className='green'>START</button>
        <button className='red'>STOP</button>
      </div>
      </div>
    </div>
  );
}

export default App;
