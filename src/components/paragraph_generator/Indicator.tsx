import React from "react";
interface Props {
  number: number;
}
const Indicator: React.FC<Props> = ({ number }) => {
  return <div className="indicator">{number}</div>;
};

export default Indicator;
