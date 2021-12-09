import './styles.scss';
import { useState } from 'react';
import SayHelloClassBased from "./classbased/props/SayHelloClassBased";
import SimplestClass from "./classbased/simplest/SimplestClass";
import CounterClassBased from "./classbased/simplestate/ColorMessageClassBased";
import ColorMessageFunctional from "./functional/simplestate/ColorMessageFunctional";
import SayHelloFunctional from "./functional/props/SayHelloFunctional";
import SimplestFunctional from "./functional/simplest/SimpleFunctional";

import DemoFormClassBased from "./classbased/forms/DemoFormClassBased";
import DemoFormFunctional from "./functional/forms/DemoFormFunctional";
import DemoFormikForm from './functional/forms/DemoFormikForm';
import TodoListManager from "./functional/reduxalternative/TodoListManager";

import DrawingCanvasClassBased from './classbased/canvas/DrawingCanvasClassBased';

import DrawingCanvasFunctional from './functional/canvas/DrawingCanvasFunctional';
import DemoReactHookForm from './functional/forms/DemoReactHookFormFunctional';

export default function App() {
  const [displayCounters, setDisplayCounters] = useState(true);

  return (
    <div className="App">
      {/* <SimplestFunctional></SimplestFunctional>
      <SimplestClass></SimplestClass>
      <SayHelloFunctional name="Ken"></SayHelloFunctional>
      <SayHelloClassBased name="Ken"></SayHelloClassBased>

      <button onClick={() => { setDisplayCounters(!displayCounters); }}>
        Toggle Counters 
      </button>

      { displayCounters && <CounterClassBased message="What a great day to be Class-Reactive!"></CounterClassBased> }
      { displayCounters && <ColorMessageFunctional message="What a great day to be Functional-Reactive!"></ColorMessageFunctional> }

      <DemoFormClassBased />
      <hr />
      <DemoFormFunctional />
      <hr />
      <DemoFormikForm />
      <hr /> */}
      <DemoReactHookForm />
      {/* <hr />
      <TodoListManager />

      <hr />
      <DrawingCanvasClassBased />

      <hr />

      <DrawingCanvasFunctional /> */}

    </div>

  );
}
