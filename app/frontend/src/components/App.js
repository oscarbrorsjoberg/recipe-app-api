import React, {Component} from "react";
import {render} from "react-dom";

import CreateRecipePage from "./CreateRecipePage"
import HomePage from "./HomePage"
import RecipePage from "./RecipePage"

export default class App extends Component {

  constructor(props) { super(props); }

  render() {
    return (
        <div><HomePage />
        </div>);
	}
}

const appDiv = document.getElementById("app");
render(<App />,
        appDiv);
