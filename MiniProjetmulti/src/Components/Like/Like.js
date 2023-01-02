import React, { useState } from "react";
import { FaThumbsUp } from  "react-icons/fa";
import './styles.css'

function Like() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="like">
      <button onClick={incrementCount}><FaThumbsUp id="svg3"/></button>
      <h1>{count}</h1>
    </div>
  );
}

export default Like;