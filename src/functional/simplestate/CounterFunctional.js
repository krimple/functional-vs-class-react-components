import { useState, useEffect, useRef } from "react";

const CounterFunctional = (props) => {
  let [counter, setCounter] = useState(0);
  let counterTimer = useRef(null);

  useEffect(() => {
    if (counterTimer.current) {
      clearInterval(counterTimer.current);
    }
    counterTimer.current = setInterval(() => {
      setCounter(counter++);
    }, 5000);
  }, [counter]);

  return <p>Counter (Functional) {counter}!</p>;
};

export default CounterFunctional;
