import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MovieCreateFrom = ({ addFilm }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const [nameError, setNameError] = useState(null);

  const submitHandler = () => {
    if (name.length === 0) {
      setNameError("Name is required");
      return;
    }
    addFilm({ name, year, image, id: uuidv4() });
    setName("");
    setYear("");
    setImage("");
    setNameError(null);
  };

  return (
    <div>
      <h2>Create Film</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      {nameError ? <div>{nameError}</div> : ""}

      <br />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={({ target }) => setYear(target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <button onClick={submitHandler}>Add</button>
    </div>
  );
};

export default MovieCreateFrom;
