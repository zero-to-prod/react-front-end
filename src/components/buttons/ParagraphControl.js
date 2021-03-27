import React, { Fragment } from "react";

const ParagraphControl = ({ props, clicked }) => {
  return (
    <Fragment>
      <button onClick={clicked} className="btn">
        {props.title}
      </button>
    </Fragment>
  );
};

export default ParagraphControl;
