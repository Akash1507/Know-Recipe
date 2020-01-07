import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import KEY from "./keys";
import Recipes from "./components/Recipes";
class App extends Component {
  state = {
    recipes: [],
    baseUrl: ""
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.query.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.spoonacular.com/recipes/search?query=${recipeName}&apiKey=${KEY}&number=10`
    );

    const data = await api_call.json();
    const base = data.baseUri;
    const recipesData = data.results.map(result => {
      return {
        imageUrl: base + result.image,
        ...result
      };
    });
    this.setState({ recipes: recipesData });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Know Your Recipe</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
