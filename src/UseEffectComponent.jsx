import { useEffect, useState } from "react";

function UseEffectComponent() {
  const buttonhandler = () => {
    // setState({ name: "setState", age: 80 });s
    console.log("clicked");
    setState2({sub: "Test rerender", value: 1})
  };
  const [state, setState] = useState({ name: "useEffect", age: 56 });
  const [state2,setState2]=useState({sub: "Test", value: 0})
  useEffect(() => console.log("UseEffectComponent1")); //no dependency array:-runs on every render including initial mount and 
  // every re-render which occurs due to any state or prop change
  useEffect(() => console.log("UseEffectComponent2"), []); //dependent on nothing hece, it will be loaded only on initial mount 
  // and not on any re renders
  useEffect(() => console.log("UseEffectComponent3"), [state]);//dependent on "state" variable alone so it wil load on rerender 
  // due to change in "state" variable alone if the change is on "state2", it wont rerender
  return (
    <>
      UseEffectComponent
      {state.name}
      <button onClick={buttonhandler}>UseEffect Button</button>
    </>
  );
}
export default UseEffectComponent;
