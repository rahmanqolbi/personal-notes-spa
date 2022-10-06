import React, { Component } from "react";
import autoBindReact from "auto-bind/react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function onSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return <ArchivePage keyword={keyword} onSearchParams={onSearchParams} />;
}

class ArchivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
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
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar keyword={this.state.keyword} onSearch={this.onSearchEventHandler} />
        {this.state.notes.length > 0 ? (
          <NoteList notes={notes} />
        ) : (
          <section className="notes-list-empty">
            <p className="notes-list__empty">Tidak ada catatan</p>
          </section>
        )}
      </section>
    );
  }
}

export default ArchivePageWrapper;
