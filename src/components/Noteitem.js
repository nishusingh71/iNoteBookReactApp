import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import "../index.css";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center justify-space-between">
            <h5 className="card-title">{note.title}</h5>
            {/* <span>
              <i
                className="fa-solid fa-trash mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted successfully", "danger");
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </span> */}
            <span
              className="position-absolute top-10 start-100 translate-middle p-2 bg-success border border-light rounded-circle"
              style={{ fontSize: "8px" }}
            >
              <i
                className="fa-solid fa-pen-to-square"
                style={{ fontSize: "14px" }}
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </span>
            <span
              className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
              style={{ fontSize: "8px", marginTop: "45px" }}
            >
              <i
                className="fa-solid fa-trash"
                style={{ fontSize: "14px" }}
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted successfully", "secondary");
                }}
              ></i>
            </span>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
