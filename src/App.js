import SayHelloClassBased from "./classbased/props/SayHelloClassBased";
import SimplestClass from "./classbased/simplest/SimplestClass";
import CounterClassBased from "./classbased/simplestate/CounterClassBased";
import CounterFunctional from "./functional/simplestate/CounterFunctional";
import SayHelloFunctional from "./functional/props/SayHelloFunctional";
import SimplestFunctional from "./functional/simplest/SimpleFunctional";

import "./styles.css";
import DemoFormClassBased from "./classbased/forms/DemoFormClassBased";
import DemoFormFunctional from "./functional/forms/DemoFormFunctional";
import DemoFormikForm from './functional/forms/DemoFormikForm';
import TodoListManager from "./functional/reduxalternative/TodoListManager";

export default function App() {
  return (
    <div className="App">
      <SimplestFunctional></SimplestFunctional>
      <SimplestClass></SimplestClass>
      <SayHelloFunctional name="Ken"></SayHelloFunctional>
      <SayHelloClassBased name="Ken"></SayHelloClassBased>
      <CounterClassBased></CounterClassBased>
      <CounterFunctional></CounterFunctional>
      <DemoFormClassBased />
      <hr />
      <DemoFormFunctional />
      <hr />
      <DemoFormikForm />
      <hr />
      <TodoListManager />

    </div>
  );
}
