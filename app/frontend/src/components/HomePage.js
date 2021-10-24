import React, {Component} from "react";
import CreateRecipePage from "./CreateRecipePage"
import RecipePage from "./RecipePage"
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
				<Route exact path='/' ><p>This is the homepage</p></Route>
				<Route path='/recipe' component={RecipePage}/>
				<Route path='/create' component={CreateRecipePage}/>
			</Switch>
			</Router>);
	}
}
