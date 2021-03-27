import React from "react";
import PropTypes from "prop-types";
const Navbar = ({ title }) => {
  return (
    <nav className="bg-gray-100">
      <h1>{title}</h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Navbar",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Navbar;
