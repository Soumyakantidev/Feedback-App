import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, version, type, isDisabaled }) => {
  return (
    <button type={type} disabled={isDisabaled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
