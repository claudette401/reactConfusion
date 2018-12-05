import React, { Component } from 'react'l
	//extend the react 'Component' to make our user-defined Menu
class Menu extends Component {
	//this makes a Menu and gives the props to Menu's super class
	constructor(props) {
		super(props); 
	}

	//the render function needs to be here to tell the component what to give to the DOM
	render() {
		return (
			<div className="container">
				<div className="row">
						"Here is some shit to display";				
				</div>
			</div>
		);	
	}
} 

//if you don't export, you won't be able to use your new component anywhere
export default Menu;