import React, { useState } from 'react';

function Counter() {

  // 1. Initialize State
  // Count starts at 0. setCount is the tool to change it.
  const [count, setCount] = useState(0);

  // 2. Event Handlers
  const increment = () => {

    // We do NOT say: count = count + 1 (This is forbidden)
    // We MUST use the setter:
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Class Attendance Counter</h3>
      <h1>{count}</h1>

      <button onClick={increment}>Add Student</button>
      <button onClick={decrement}>Remove Student</button>
    </div>
  );
}

export default Counter;