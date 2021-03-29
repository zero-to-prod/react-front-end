import React, { Fragment } from "react";
interface Props {
  loading: boolean;
}

const Spinner: React.FC<Props> = ({ loading }: { loading: boolean }) => {
  return <Fragment>{loading ? <div className="spinner" /> : ""}</Fragment>;
};

export default Spinner;
