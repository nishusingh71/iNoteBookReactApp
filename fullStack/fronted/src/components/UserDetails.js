import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const UserDetails = () => {
  const context = useContext(noteContext);
  const { user, getUserDetails } = context;
  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <span
        className="navbar-text"
        style={{
          width: "140px",
          fontSize: "12px",
          display: "block",
        }}
      >
        <div className="row">
          <div style={{ fontWeight: "bold" }}>Hello, {user.name || "User"}</div>
          <div>@{user.username || "(username)"}</div>
        </div>
      </span>
    </>
  );
};

export default UserDetails;
