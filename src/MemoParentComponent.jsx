import  { useCallback, useMemo, useState } from "react";
import MemoComp from "./MemoComp";

const MemoParentComponent = () => {
    const [count, setCount] = useState(0);
    const c=5
    const a = useMemo(()=>{return {name:"David"}},[]); ///for reference type variables pass this in parent to not rerender childS
    const getName = useCallback(() => {
        return "David";///for reference type that are gfunctions pass this in parent to not rerender childS
      }, []);
  return (

    <>
     <div>MemoParentComponent</div>
      <MemoComp val={a} getName={getName}>MemoChild</MemoComp>
      {/* <MemoComp val={count}>MemoChild</MemoComp> */}
      {/* <MemoComp val={c}>MemoChild</MemoComp> */}
      <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        Count - {count}
      </button>
     
    </>
  );
};

export default MemoParentComponent;
