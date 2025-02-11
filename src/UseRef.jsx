import { useEffect, useRef } from "react";
import UseImperativeHandle from "./UseImperativeHandle";
const UseRef = () => {
  const paraRef = useRef();
  //   useEffect(() => {
  //     console.log(paraRef.current);
  //   });
  return (
    <div>
      UseRef
      <UseImperativeHandle ref={paraRef} />
    </div>
  );
};
export default UseRef;
