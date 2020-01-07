import React from "react";
import KEY from "../keys";

class Recipe extends React.Component {
  state = {
    recipeData: {},
    cuisines: [],
    dishTypes: [],
    instructions: [],
    ingredients: []
  };

  componentDidMount = async () => {
    const recipeId = this.props.location.state.recipeId;
    const api_call = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${KEY}`
    );

    const data = await api_call.json();
    console.log(data);
    this.setState({
      recipeData: {
        title: data.title,
        image: data.image,
        time: data.readyInMinutes
      },
      cuisines: data.cuisines,
      dishTypes: data.dishTypes,
      instructions: data.analyzedInstructions[0].steps,
      ingredients: data.extendedIngredients
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-12 py-5 mx-auto text-center">
            <div class="lib-panel">
              <div class="row box-shadow">
                <div class="col-md-12 p-0">
                  <h1 style={{ backgroundColor: "red", padding: 0, margin: 2 }}>
                    Hiiiiiiiii
                  </h1>
                </div>
                <div class="col-md-6 pb-0">
                  <img
                    class="lib-img-show"
                    src={this.state.recipeData.image}
                    alt={this.state.recipeData.title}
                  />
                </div>
                <div class="col-md-6">
                  <div class="lib-row lib-header">
                    {this.state.recipeData.title}
                    <div class="lib-header-seperator"></div>
                  </div>
                  <div class="lib-row lib-desc">
                    Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
                    ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 py-5 mx-auto">
            <div className="lib-panel">
              <div className="row box-shadow text-center">
                <div className="col-md-12 p-0">
                  <h2
                    className="pt-2 mw-100"
                    style={{
                      backgroundColor: "#0B3142",
                      color: "white"
                    }}
                  >
                    Ingredients Used
                    <hr />
                  </h2>
                </div>
                {this.state.ingredients.map((ta, index) => {
                  return (
                    <span
                      key={index}
                      className="badge ml-2 mb-2"
                      style={{
                        backgroundColor: "#0B3142",
                        color: "white",
                        fontSize: 15,
                        textTransform: "capitalize"
                      }}
                    >
                      {ta.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-8 py-5 mx-auto">
            <div className="lib-panel">
              <div className="row box-shadow text-center">
                <div className="col-md-12 p-0">
                  <h2
                    className="pt-2 mw-100"
                    style={{
                      backgroundColor: "#841C26",
                      color: "white"
                    }}
                  >
                    Cuisines
                    <hr />
                  </h2>
                  <div>
                    {this.state.cuisines.map((ta, index) => {
                      return (
                        <span
                          key={index}
                          className="badge ml-2 mb-2"
                          style={{
                            backgroundColor: "#841C26",
                            color: "white",
                            fontSize: 15,
                            textTransform: "capitalize"
                          }}
                        >
                          {ta}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-8 py-1 mx-auto">
            <h2>Steps to make this recipe</h2>
            {this.state.instructions.map(step => {
              return (
                <div>
                  <p>
                    {step.number} : {step.step}
                  </p>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
