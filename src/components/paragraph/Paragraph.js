import React, { Fragment } from "react";
import PropTypes from "prop-types";
const Paragraph = ({ paragraph }) => {
  return (
    <Fragment>
      <p className={"paragraph"}>{paragraph}</p>
    </Fragment>
  );
};
Paragraph.propTypes = {
  paragraph: PropTypes.string.isRequired,
};
export default Paragraph;
