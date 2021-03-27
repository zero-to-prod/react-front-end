import React, { Fragment, useState } from "react";
import ParagraphControl from "../buttons/ParagraphControl";
import Send from "../buttons/Send";
import Paragraphs from "../paragraph/Paragraphs";

const Demo = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);

  const increment = () => {
    setNumberOfParagraphs((prevCount) => ++prevCount);
  };
  const decrement = () => {
    if (numberOfParagraphs > 0) {
      setNumberOfParagraphs((prevCount) => --prevCount);
    }
  };
  return (
    <Fragment>
      <div className="flex mx-auto justify-between">
        <ParagraphControl props={{ title: "Subtract" }} clicked={decrement} />
        {numberOfParagraphs}
        <ParagraphControl props={{ title: "Add" }} clicked={increment} />
      </div>
      <Send number_of_paragraphs={numberOfParagraphs} />
      <Paragraphs />
    </Fragment>
  );
};

export default Demo;
