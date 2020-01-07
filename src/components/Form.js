import React from "react";

const Form = props => (
  <form onSubmit={props.getRecipe} styles={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="query" />
    <button className="form__button">Search</button>
  </form>
);

export default Form;
