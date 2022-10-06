import React, { Component } from "react";
import autoBindReact from "auto-bind/react";
import PropTypes from "prop-types";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function onSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return <HomePage keyword={keyword} onSearchParams={onSearchParams} />;
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
      keyword: props.keyword || "",
    };
    autoBindReact(this);
  }
  onSearchEventHandler(keyword) {
    this.setState(() => ({
      keyword: keyword,
    }));
    this.props.onSearchParams(keyword);
  }
  render() {
    const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.keyword));
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar keyword={this.state.keyword} onSearch={this.onSearchEventHandler} />
        {this.state.notes.length > 0 ? (
          <NoteList notes={notes} />
        ) : (
          <section className="notes-list-empty">
            <p className="notes-list__empty">Tidak ada catatan</p>
          </section>
        )}
        <AddButton />
      </section>
    );
  }
}

HomePage.propTypes = {
  keyword: PropTypes.string,
  onSearchParams: PropTypes.func.isRequired,
};

export default HomePageWrapper;
