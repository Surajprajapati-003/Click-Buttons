import React, { useState } from "react";

const ClickButton = () => {
  const [count, setCount] = useState(0);
  
  // Function that runs when button is clicked
  const handleClick = () => {
    setCount(count + 1);
    alert("Button clicked!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>React onClick Example</h2>
      <button
        onClick={handleClick} // 👈 onClick event
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>

      <p>You clicked {count} times</p>
    </div>
  );
};

export default ClickButton;