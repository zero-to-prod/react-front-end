import React, { useContext } from "react";
import AppContext from "../../context/app/appContext";

interface Props {
  number_of_paragraphs: number;
}

const Send: React.FC<Props> = ({ number_of_paragraphs }) => {
  const appContext = useContext(AppContext);
  const { loading } = appContext;
  const onClick = () => {
    appContext.getParagraphs(number_of_paragraphs);
  };
  return (
    <div>
      <button className="send" onClick={onClick} type="submit">
        {loading ? <div className="loader" /> : "Send"}
      </button>
    </div>
  );
};

export default Send;
