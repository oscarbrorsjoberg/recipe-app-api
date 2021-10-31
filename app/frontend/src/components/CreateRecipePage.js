import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default class CreateRecipePage extends Component {
	defaultCost = 3;
	defaultTime = 3;
	defaultName = "digital curry";

	recipeTagList = [
		{
			number: 1,
		}
	];

	recipeIngredientList = [
		{
			number: 1,
		}
	];

	constructor(props){
		super(props);

		this.state = {
			title: this.defaultName,
			numberOfMinutes: this.defaultTime,
			cost: this.defaultCost,
			tags: this.recipeTagList,
			ingredients: this.recipeIngredientList,
		};

		this.handleRecipeButtonPressed = this.handleRecipeButtonPressed.bind(this);
		this.handleNumberOfMinutes = this.handleNumberOfMinutes.bind(this);
		this.handleCost = this.handleCost.bind(this);
		this.handleTitle = this.handleTitle.bind(this);
	}

	handleTitle(e){
		this.setState({
			title: e.target.value,
		});
	}

	handleNumberOfMinutes(e){
		this.setState({
			numberOfMinutes: e.target.value,
		});
	}

	handleCost(e){
		this.setState({
			cost: e.target.value,
		});
	}

	handleRecipeButtonPressed() {
		// console.log(this.state.title);
		const requestOptions = {
			method: 'POST',
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
		return (
			<Grid container spacing={1}>
					<Grid item xs={12} align="center">
						<Typography component={"span"} variant={"body2"}>
							Create A Recipe
						</Typography>
				    </Grid>
				<Grid item xs={12} align="center">
					<FormControl>
						<TextField 
								label="Recipe Title"
								required={true}
								onChange={this.handleTitle}
						 />
						<FormHelperText>
							<div> Recipe Title Yao</div>
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} align="center">
					<FormControl>
						<TextField 
								label="Time"
								type="number"
								required={true}
								defaultValue={this.defaultTime}
								inputProps={{
									min: 1,
								}}
								onChange={this.handleNumberOfMinutes}
						 />
						<FormHelperText>
							<div> Number of minutes </div>
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} align="center">
					<FormControl>
						<TextField 
								label="Cost"
								type="number"
								required={true}
								defaultValue={this.defaultCost}
								inputProps={{
									min: 0,
								}}
								onChange={this.handleCost}
						 />
						<FormHelperText>
							<div> Cost of recipe in dollars </div>
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} align="center">
						<Button color="secondary" variant="contained" onClick={this.handleRecipeButtonPressed} >
							Add Recipe
						</Button>
			  </Grid>
				<Grid item xs={12} align="center">
						<Button color="primary" variant="contained" to="/" component={Link}>
							Back
						</Button>
			  </Grid>
			</Grid>);
	}

}
