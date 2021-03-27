import React from "react";
import PropTypes from "prop-types";
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center text-white sm:text-2xl text-lg">
              Random Paragraph Generator
            </div>
          </div>
        </div>
      </div>
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
