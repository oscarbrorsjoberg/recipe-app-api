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
	defualtCost = 3;
	defualtTime = 3;

	recipeTagList = [
		{
			text: "My Tag",
		}
	];

	recipeIngredientList = [
		{
			text: "My Ingredient",
		}
	];

	constructor(props){
		super(props);
		this.state = {
			title: "digital curry",
			numberOfMinutes: this.defualtTime,
			cost: this.defualtCost,
			tags: {},
			ingredients: {},
		};
	}

	handleTags(e){
		this.setState(
			{
				tags: e.target.value,
			}
		)
	}

	handleIngredients(e){
		this.setState(
			{
				tags: e.target.value,
			}
		)
	}

	render(){
		// return <p> This is create a recipe page </p>;
		return (
			<Grid container spacing={1}>
					<Grid item xs={12} align="center">
						<Typography component="h4" variant="h4">
							Create A Recipe
						</Typography>
				    </Grid>
				<Grid item xs={12} align="center">
					<FormControl>
						<TextField 
								label="Recipe Title"
								required={true}
						 />
						<FormHelperText>
							<div> Recipe Title</div>
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} align="center">
					<FormControl>
						<TextField 
								label="Time"
								type="number"
								required={true}
								defaultValue={this.defualtTime}
								inputProps={{
									min: 1,
								}}
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
								defaultValue={this.defualtCost}
								inputProps={{
									min: 0,
								}}
						 />
						<FormHelperText>
							<div> Cost of recipe in dollars </div>
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} align="center">
						<List align="center">
								<ListItem align="center">
									<ListItemText primary="hello"/>
								</ListItem>
						</List>
				</Grid>
				<Grid item xs={12} align="center">
						<Button color="secondary" variant="contained">
							Create A Room
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
