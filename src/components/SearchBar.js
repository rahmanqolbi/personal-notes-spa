import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, onSearch }) {
  return (
    <section className="search-bar">
      <input type="text" placeholder="Cari berdasarkan judul ..." value={keyword} onChange={(event) => onSearch(event.target.value)} />
    </section>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
