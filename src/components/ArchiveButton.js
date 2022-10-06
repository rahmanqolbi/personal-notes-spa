import React from "react";
import PropTypes from "prop-types";
import { BsArrowDownSquare } from "react-icons/bs";

function ArchiveButton({ onArchive }) {
  return (
    <button className="action" type="button" title="Arsipkan" onClick={onArchive}>
      <BsArrowDownSquare />
    </button>
  );
}

ArchiveButton.propTypes = {
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
