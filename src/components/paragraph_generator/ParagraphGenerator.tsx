import React, { useState } from "react";
import Control from "./Control";
import Send from "./Send";
import Paragraphs from "./Paragraphs";
import Indicator from "./Indicator";

const ParagraphGenerator = () => {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState<number>(1);

  const increment = () => {
    setNumberOfParagraphs((prevCount) => ++prevCount);
  };
  const decrement = () => {
    if (numberOfParagraphs > 1) {
      setNumberOfParagraphs((prevCount) => --prevCount);
    }
  };
  return (
    <div id="paragraph_generator">
      <div className="control-indicator-wrapper">
        <Control title="Subtract" clicked={decrement} />
        <Indicator number={numberOfParagraphs} />
        <Control title="Add" clicked={increment} />
      </div>
      <Send number_of_paragraphs={numberOfParagraphs} />
      <Paragraphs />
    </div>
  );
};

export default ParagraphGenerator;
