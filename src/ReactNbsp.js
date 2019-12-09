import PropTypes from "prop-types";
import React from "react";

const Space = props => {
  if (props.count < 1) {
    return null;
  }

  let count = props.count;
  let space = "";
  do {
    space = space.concat("\u00A0");
  } while (--count);

  return <span>{space}</span>;
};

Space.propTypes = {
  count: PropTypes.number
};

export default Space;
