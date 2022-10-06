import React, { Component } from "react";
import autoBindReact from "auto-bind/react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import SaveButton from "../components/SaveButton";

function AddPageWrapper() {
  return <AddPage navigate={useNavigate()} />;
}

class AddPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    autoBindReact(this);
  }
  onTitleChangeEventHandler(event) {
    this.setState(() => ({
      title: event.target.value,
    }));
  }
  onBodyInputEventHandler(event) {
    this.setState(() => ({
      body: event.target.innerHTML,
    }));
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    addNote(this.state);
    this.props.navigate("/");
  }
  render() {
    return (
      <section className="add-new-page">
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="add-new-page__input">
            <input
              className="add-new-page__input__title"
              placeholder="Masukan Judul"
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <div className="add-new-page__input__body" contentEditable data-placeholder="Isi catatan ...." onInput={this.onBodyInputEventHandler} />
          </div>
          <div className="add-new-page__action">
            <SaveButton />
          </div>
        </form>
      </section>
    );
  }
}

export default AddPageWrapper;
