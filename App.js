import React, { useState, useEffect } from "react";
import "./counter.css"; 

function CounterApp() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [allowNegative, setAllowNegative] = useState(true);
  const upperLimit = 100;

  const increment = () => {
    if (count + step <= upperLimit) {
      setCount(count + step);
    }
  };

  const decrement = () => {
    if (allowNegative || count - step >= 0) {
      setCount(count - step);
    }
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    if (!allowNegative && count < 0) {
      setCount(0);
    }
  }, [allowNegative]);

  return (
   
    <div className="container">
    
      <h1>"Counter App"</h1>
      <div className="counter-display">{count}</div>

      <div className="controls">
        <button
          className="dcbtn"
          onClick={decrement}
          disabled={!allowNegative && count - step < 0}
        >
          <h2>-</h2>
        </button>
         <button className="reset" onClick={reset}>
         <h3> Reset</h3>
        </button>
        <button
          className="inbtn"
          onClick={increment}
          disabled={count + step > upperLimit}
        >
          <h2>+</h2>
        
          
        </button>

      </div>

      <div className="settings">
        <label>
          Step Size:
          <input
            type="number"
            value={step}
            min="1"
            onChange={(e) => setStep(parseInt(e.target.value) || 1)}
          />
        </label>
        <hr />
        <label className="alne">
          Allow Negative:
          <input
            type="checkbox"
            checked={allowNegative}
            onChange={(e) => setAllowNegative(e.target.checked)}
          />
        </label>
      </div>
    </div>
  );
}
export default CounterApp;