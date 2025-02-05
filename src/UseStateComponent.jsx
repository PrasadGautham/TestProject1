import { useState } from "react";

function UseStateComponent() {
  const [state, setState] = useState({ name: "Manoj", count: 0 });
  const buttonhandler = () => {
    setState((prevState) => ({ name: "Jonam", count: prevState.count + 1 }));
  };
  return (
    <div>
      {state.name},{state.count}
      <button onClick={buttonhandler}>
        Change to Jonam and increase count
      </button>
    </div>
  );
}
export default UseStateComponent;
