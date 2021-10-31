import React, {Component} from "react";
import CreateRecipePage from "./CreateRecipePage"
import RecipePage from "./RecipePage"
import Recipe from "./Recipe"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect} from "react-router-dom"; 

export default class HomePage extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (<Router>
			<Switch>
				<Route exact path='/' ><div>This can be HMPAGE</div></Route>
				<Route path='/recipe' component={RecipePage}/>
				<Route path='/create' component={CreateRecipePage}/>
				<Route path='/recipes/:recipeId' component={Recipe}/>
			</Switch>
			</Router>);
	}
}
