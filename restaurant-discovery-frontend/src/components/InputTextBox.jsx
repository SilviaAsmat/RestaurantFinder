import React, { useState } from "react";

function InputTextBox( { hintText="search term", onTextFieldUpdated }) { // TODO: RENAME
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onTextFieldUpdated(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={hintText}
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
}

export default InputTextBox;
