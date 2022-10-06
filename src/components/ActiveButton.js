import React from "react";
import PropTypes from "prop-types";
import { BsArrowUpSquare } from "react-icons/bs";

function ActiveButton({ onArchive }) {
  return (
    <button className="action" type="button" title="Aktifkan" onClick={onArchive}>
      <BsArrowUpSquare />
    </button>
  );
}

ActiveButton.propTypes = {
  onArchive: PropTypes.func.isRequired,
};

export default ActiveButton;
