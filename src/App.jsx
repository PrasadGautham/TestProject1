import "./App.css";
import FuncComp from "./FuncComp";
import ClassComp from "./ClassComp";
import Jsx from "./Jsx.jsx";
import StateClassComponent from "./StateClassComponent.jsx";
import PropsClassComponent from "./PropsClassComponent.jsx";
import FragmentsComponent from "./FragmentsComponent.jsx";
import UseStateComponent from "./UseStateComponent.jsx";
import LifeCycleComponent from "./LifeCycleComponent.jsx";
import UseEffectComponent from "./UseEffectComponent.jsx";
// import UseRef from "./UseRef.jsx";
import Events from "./Events.jsx";
import FormControlled from "./FormControlled.jsx";
import FormUnControlled from "./FormUncontrolled.jsx";
import FormGeneral from "./FormGeneral";
import UseRef from "./useRef.jsx";
import LoopComponent from "./LoopComponent.jsx";

function App() {
  return (
    <div>
      {/* <FuncComp />
      <ClassComp />
      <Jsx />
      <FragmentsComponent />
      <PropsClassComponent name="David" age={45}>
        PropsClassComponent
      </PropsClassComponent>
      <StateClassComponent />
      <LifeCycleComponent name="Gauth" age={90}></LifeCycleComponent>
      <UseStateComponent />
      <UseEffectComponent />
      <UseRef />
      <Events />
      <FormControlled />
      <FormUnControlled />
      <FormGeneral /> */}
      <LoopComponent/>
    </div>
  );
}

export default App;
