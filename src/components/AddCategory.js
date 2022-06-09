import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim().length > 2) {
      setCategories((prevValue) => {
        return [inputText, ...prevValue];
      });
      setInputText("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="anime"
          placeholder="agregue anime"
          value={inputText}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
