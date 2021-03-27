import React, { useContext } from "react";
import AppContext from "../../context/app/appContext";

const Send = ({ number_of_paragraphs }) => {
  const appContext = useContext(AppContext);
  const onSubmit = (e) => {
    e.preventDefault();
    appContext.getParagraphs(number_of_paragraphs);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Send;
