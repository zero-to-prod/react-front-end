import React, { Fragment } from "react";
interface Props {
  paragraph: string;
}
const Paragraph: React.FC<Props> = ({ paragraph }) => {
  return (
    <Fragment>
      <p className={"paragraph"}>{paragraph}</p>
    </Fragment>
  );
};

export default Paragraph;
