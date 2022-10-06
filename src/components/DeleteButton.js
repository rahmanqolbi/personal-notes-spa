import React from "react";
import PropTypes from "prop-types";
import { BsTrash } from "react-icons/bs";

function DeleteButton({ onDelete }) {
  return (
    <button className="action" type="button" title="Hapus" onClick={onDelete}>
      <BsTrash />
    </button>
  );
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
