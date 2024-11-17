import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">About iNoteBook</h1>
        <p className="text-muted">
          Your personal, secure, and efficient note-taking application.
        </p>
      </div>
      <div>
        <h3 className="text-primary">Features</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Secure Signup and Login:</strong> Access your notes securely
            with a personal account.
          </li>
          <li className="list-group-item">
            <strong>Individual Notes:</strong> Create, edit, and manage your
            notes effortlessly.
          </li>
          <li className="list-group-item">
            <strong>Cloud Sync:</strong> Access your notes from anywhere, on any
            device.
          </li>
          <li className="list-group-item">
            <strong>Organized Layout:</strong> Enjoy an intuitive and
            user-friendly interface.
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-primary">How to Use</h3>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">Sign up to create a new account.</li>
          <li className="list-group-item">
            Log in to access your personalized notebook.
          </li>
          <li className="list-group-item">
            Create notes by adding a title and content.
          </li>
          <li className="list-group-item">Edit or delete notes as needed.</li>
        </ol>
      </div>
      <div className="mt-4">
        <h3 className="text-primary">Why Choose iNoteBook?</h3>
        <p className="text-muted">
          iNoteBook is lightweight, secure, and accessible from anywhere. Built
          using modern technologies like React, Node.js, and MongoDB, it ensures
          a smooth and reliable experience.
        </p>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-primary">Get Started Today!</h3>
        <p className="text-muted">
          Sign up now and take control of your notes with iNoteBook.
        </p>
        <a href="/signup" className="btn btn-primary">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default About;
