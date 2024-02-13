import React, { useState } from 'react';

function Counter() {
  // Initialize the counter state to 0 using useState
  const [count, setCount] = useState(0);

  // Event handler for button click to increment count
  const handleClick = () => {
    setCount(count + 1); // Increment count by 1
  };

  return (
    <div>
      {/* Display the count */}
      <p>Button clicked {count} times.</p>
      {/* Button with onClick event handler */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Counter;
