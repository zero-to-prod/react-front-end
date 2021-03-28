import React, { useContext } from "react";
import AppContext from "../../context/app/appContext";

const Send = ({ number_of_paragraphs }) => {
  const appContext = useContext(AppContext);
  const { loading } = appContext;
  const onClick = () => {
    appContext.getParagraphs(number_of_paragraphs);
  };
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className="w-full h-12 shadow sm:h-14 hover:scale-105 transform transition justify-center inline-flex items-center px-3 py-4 border border-transparent text md:text-2xl leading-4 rounded-md shadow-sm text-white font-bold bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {loading ? (
          <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6" />
        ) : (
          <span>Send</span>
        )}
      </button>
    </div>
  );
};

export default Send;
