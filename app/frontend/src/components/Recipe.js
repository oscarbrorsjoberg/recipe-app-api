import React, { Component } from 'react';

export default class Recipe extends Component {
  constructor(props){
    super(props);
    this.state = {
				title: "Digital Curry",
				timeMinutes: 3,
				cost: 3,
				tags: ["1"],
				ingredients: ["1"],
    };

    this.recipeId = this.props.match.params.recipeId;

  }

	test() {
		// console.log(this.state.title);
		const requestOptions = {
			method: 'GET',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				title: this.state.title,
				time_minutes: this.state.numberOfMinutes,
				price: this.state.cost,
				tags: ["1"],
				ingredients: ["1"],
			})
		};
		fetch("/api/recipe/recipes/", requestOptions).then(
			(response) => response.json()).then((data) => console.log(data));
	}

  render(){
    return (<div> 
      <h3> {this.recipeId} </h3>
      <p> Title: {this.state.title}</p>
      <p> Time: {this.state.timeMinutes}</p>
      <p> Cost: {this.state.cost}</p>
      </div>
    );
  }
}
