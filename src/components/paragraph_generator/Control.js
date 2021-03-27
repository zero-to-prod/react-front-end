import React, { Fragment } from "react";

const Control = ({ title, clicked }) => {
  return (
    <Fragment>
      <button
        onClick={clicked}
        className="btn col-span-2 hover:scale-105 transform transition text-gray-800 font-medium md:text-lg font-bold bg-gray-200 hover:bg-gray-300 py-4 rounded-lg border border-transparent leading-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        {title}
      </button>
    </Fragment>
  );
};

export default Control;
