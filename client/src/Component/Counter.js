import React, { useState, useEffect } from "react";

const Counter = ({ initial, final }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    let increse = final / 200;

    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev > final) {
          clearInterval(interval);
          return final;
        }
        return ~~(prev + increse);
      });
    }, 1);
  }, [final]);

  return <span>{count}</span>;
};
export default Counter;
