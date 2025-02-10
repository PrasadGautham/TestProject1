import { useImperativeHandle, useRef } from "react";

const UseImperativeHandle = ({ref}) => {
  const h2Ref = useRef();
  useImperativeHandle(ref, () => {
    return {
      test: () => {
        alert();
      },
      h2Ref: h2Ref.current,
    };
  });
  return <h2 ref={h2Ref}>From UseRef comp</h2>;
};
export default UseImperativeHandle;
