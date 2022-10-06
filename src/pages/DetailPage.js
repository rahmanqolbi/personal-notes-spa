import React from "react";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils/index.js";
import autoBindReact from "auto-bind/react";
import parser from "html-react-parser";
import ArchiveButton from "../components/ArchiveButton";
import DeleteButton from "../components/DeleteButton";
import ActiveButton from "../components/ActiveButton";
import NotFoundPage from "./NotFoundPage";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.navigate = props.navigate;
    this.state = {
      note: getNote(this.id),
    };
    autoBindReact(this);
  }
  onDeleteNote() {
    deleteNote(this.id);
    this.navigate("/");
  }
  onArchiveNote() {
    this.state.note.archived ? unarchiveNote(this.id) : archiveNote(this.id);
    this.navigate("/");
  }
  render() {
    if (!this.state.note) {
      return <NotFoundPage />;
    } else {
      return (
        <section className="detail-page">
          <h3 className="detail-page__title">{this.state.note.title}</h3>
          <p className="detail-page__createdAt">{showFormattedDate(this.state.note.createdAt)}</p>
          <div className="detail-page__body">{parser(this.state.note.body)}</div>
          <div className="detail-page__action">
            {this.state.note.archived ? <ActiveButton onArchive={this.onArchiveNote} /> : <ArchiveButton onArchive={this.onArchiveNote} />}
            <DeleteButton onDelete={this.onDeleteNote} />
          </div>
        </section>
      );
    }
  }
}

export default DetailPageWrapper;
