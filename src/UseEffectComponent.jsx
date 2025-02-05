import { useEffect, useState } from "react";

function UseEffectComponent() {
  const buttonhandler = () => {
    setState({ name: "setState", age: 80 });
    console.log("clicked");
  };
  const [state, setState] = useState({ name: "useEffect", age: 56 });
  useEffect(() => console.log("UseEffectComponent1"));
  useEffect(() => console.log("UseEffectComponent2"), []);
  useEffect(() => console.log("UseEffectComponent3"), [state]);
  return (
    <>
      UseEffectComponent
      {state.name}
      <button onClick={buttonhandler}>UseEffect Button</button>
    </>
  );
}
export default UseEffectComponent;
