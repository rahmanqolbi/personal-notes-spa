import React from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

function AddButton() {
  const navigate = useNavigate();
  return (
    <div className="homepage__action">
      <button className="action" type="button" title="Tambah" onClick={() => navigate("notes/new")}>
        <FiPlus />
      </button>
    </div>
  );
}

export default AddButton;
