import React, { Fragment, useContext } from "react";
import Paragraph from "./Paragraph";
import AppContext from "../../context/app/appContext";

const Paragraphs = () => {
  const appContext = useContext(AppContext);
  const { paragraphs } = appContext;
  return (
    <Fragment>
      {paragraphs.map((paragraph: string, index: React.Key | null) => {
        return <Paragraph paragraph={paragraph} key={index} />;
      })}
    </Fragment>
  );
};
export default Paragraphs;
