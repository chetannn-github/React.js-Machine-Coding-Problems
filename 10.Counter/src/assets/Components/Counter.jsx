import React from 'react'
import { useEffect } from 'react';

function Counter() {
  let [hour, setHour] = React.useState(0);
  let [second, setSecond] = React.useState(0);
  let [minute, setMinute] = React.useState(0);
  let [totalSeconds,setTotalSeconds] = React.useState(0);

  let [isRunning,setIsRunnig] = React.useState(false);
  let [isPaused,setIsPaused] = React.useState(false);

  let hourRef = React.useRef(null);

  useEffect(()=>{
    hourRef.current.focus();
  },[]);

  let handleHourChange = (e) => {
    if(isNaN(e.target.value)){
      return;
    }
    setHour(e.target.value);
  }

  let handleSecondChange = (e) => {
    if(isNaN(e.target.value)){
      return;
    }
    setSecond(e.target.value);
  }

  let handleMinuteChange = (e) => {
    if(isNaN(e.target.value)){
      return;
    }
    setMinute(e.target.value);
  }

  let handleStartCounter = () => {
    setIsRunnig(true);
    setTotalSeconds((hour*3600) + (minute*60) + second);
    setHour(0);
    setMinute(0);
    setSecond(0);
    hourRef.current.focus();
  }

  useEffect(()=>{
    let interval = null;
    console.log("useffect chal rha hh"); 
    if(isRunning && !isPaused){
      console.log("Interval chal rha hh");
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
      }, 1000);
    }
    
    if(totalSeconds < 0){
      clearInterval(interval);
      setIsRunnig(false);
      alert("Counter Finished");
    }
    return () => clearInterval(interval);
  },[isRunning, totalSeconds,isPaused]);
  
  

  return (
    <div>
      <h1>Counter</h1>
      {isRunning && <h2>{Math.floor(totalSeconds/3600)}:{Math.floor((totalSeconds%3600)/60)}:{totalSeconds%60}</h2>}
      {isRunning && <button onClick={() => setIsRunnig(false)}>Stop Counter</button>}
      {isRunning && <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? "Resume" : "Pause"}</button>}
      {!isRunning && (
        <>
        <input type='text' placeholder='hh' value={hour} ref={hourRef} onChange={handleHourChange} /> 
        <input type='text' placeholder='mm' value={minute} onChange={handleMinuteChange}/>
        <input type='text' placeholder='ss' value={second} onChange={handleSecondChange}/> 
        <button onClick={handleStartCounter}> Start Counter</button>
      </>)}
      
      

    </div>
  )
}

export default Counter