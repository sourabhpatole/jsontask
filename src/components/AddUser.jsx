import React from "react";
import "../App.css";
const AddUser = () => {
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="add-user">
      <h1 style={{ textAlign: "center" }}>AddUser</h1>
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Body" name="body" />
      <button
        onChange={() => {
          handleSubmit();
        }}
        style={{ width: "150px" }}
      >
        Add
      </button>
    </div>
  );
};

export default AddUser;
