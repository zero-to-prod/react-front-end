import React, { useState } from "react";
import Control from "./Control";
import Send from "./Send";
import Paragraphs from "../paragraph/Paragraphs";
import Indicator from "./Indicator";

const ParagraphGenerator = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(1);

  const increment = () => {
    setNumberOfParagraphs((prevCount) => ++prevCount);
  };
  const decrement = () => {
    if (numberOfParagraphs > 0) {
      setNumberOfParagraphs((prevCount) => --prevCount);
    }
  };
  return (
    <div className="px-4 md:px-0">
      <div className="grid grid-cols-5 gap-4 text-center my-4 ">
        <Control title="Subtract" clicked={decrement} />
        <Indicator value={numberOfParagraphs} />
        <Control title="Add" clicked={increment} />
      </div>
      <Send number_of_paragraphs={numberOfParagraphs} />
      <Paragraphs />
    </div>
  );
};

export default ParagraphGenerator;
