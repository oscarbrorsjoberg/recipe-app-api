import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

export default class CreateUserPage extends Component {
	deufalutName = "John Doe";
	deufalutPassword = "pass123";

	constructor(props){
		super(props);
		this.state = {
			name: this.defaultName,
			password: this.defaultPassword,
		}

	}

		handlePassword(e){
			this.setState(
				password: e.target.value,
			)
		}

		handleName(e){
			this.setState(
				name: e.target.value,
			)
		}


	render(){
		return(
			<Grid container spacing={1}>
				<Grid item xs={12} align="center">
					<Typography component={"span"} variant={"body2"}>
						Create user
			    </Typography>
				  </Grid>
				<Grid item xs={12} align="center">
					<FormControl>
						<TextField 
								label="User Name"
								required={true}
								onChange={this.handleName}
						 />
				</Grid>
				<Grid item xs={12} align="center">
					<FormControl>
						<TextField 
								label="User Name"
								required={true}
								onChange={this.handleName}
						 />
				</Grid>
			)



	}
}
