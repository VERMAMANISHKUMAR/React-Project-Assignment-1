import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  // React Spring animation for background
  const props = useSpring({
    from: { height: '0%' },
    to: { height: `${Math.min(count * 10, 100)}%` },
    config: { tension: 300, friction: 20 }
  });

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--count', count);
  }, [count]);

  return (
    <div className="counter-container">
      <animated.div
        className="background-animation"
        style={{
          ...props,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, #6b48ff, #6b48ff66)'
        }}
      />
      <div className="counter-content">
        <h2 className="counter-title">Counter</h2>
        <div className="counter-value">{count}</div>
        <div className="counter-buttons">
          <button className="counter-button increment" onClick={handleIncrement}>
            Increment
          </button>
          <button className="counter-button reset" onClick={handleReset}>
            Reset
          </button>
          <button className="counter-button decrement" onClick={handleDecrement}>
            Decrement
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Counter;

// import React, { useState } from 'react';

// function Counter() {
//    const [counter, setCounter] = useState(0);
   
//    return (
//       <div className='counter-container'>
//          <button onClick={() => setCounter(counter + 1)}>Increment</button>
//          <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//          <button onClick={() => setCounter(0)}>Reset</button>
//          <p>Count: {counter}</p>
//       </div>
//    );
// }
// export default Counter;
