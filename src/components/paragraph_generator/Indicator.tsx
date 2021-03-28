import React from "react";
interface Props {
  number: number;
}
const Indicator: React.FC<Props> = ({ number }) => {
  return <div className="md:text-4xl text-3xl my-auto">{number}</div>;
};

export default Indicator;
