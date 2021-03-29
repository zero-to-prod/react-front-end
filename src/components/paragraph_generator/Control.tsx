import React, { Fragment, MouseEventHandler } from "react";
interface Props {
  title: string;
  clicked: MouseEventHandler;
}
const Control: React.FC<Props> = ({ title, clicked }) => {
  return (
    <Fragment>
      <button onClick={clicked} className="control">
        {title}
      </button>
    </Fragment>
  );
};

export default Control;
