import React from "react";

const Form = props => (
  <form onSubmit={props.getRecipe}>
    <input type="text" name="query" />
    <button>Search</button>
  </form>
);

export default Form;
