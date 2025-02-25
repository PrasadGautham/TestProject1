import { memo } from "react";

const MemoComp = ({val}) => {
    console.log("MemoComp rendered (Child)",val)

  return <div>MemoComp</div>;
};

export default memo(MemoComp);
