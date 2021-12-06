import { useState, useEffect, useRef } from "react";

const colors = ['red', 'brown', 'blue', 'green', 'black'];

const ColorMessageFunctional = ({message}) => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    // using functional pattern from
    // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    let mounted = true;
    const counterTimer = setInterval(() => {
      // only do something if the effect is created and the component
      // is mounted. Takes advantage of js closure.
      if (mounted) { setCounter(counter++); }
    }, 200);

    // return value:  cleanup function on dismount
    return () => {
      clearInterval(counterTimer);
    }
  }, [counter]);

  return (
      <p 
        style={
          { color: colors[counter % colors.length]}}>
            Counter (Functional) {counter % colors.length}! - color: {colors[counter % colors.length]}
      </p>
  );
};

export default ColorMessageFunctional;
