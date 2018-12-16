import React, { Component } from 'react';
import Home from './HomeComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './FxMenuComponent.js';
import Dishdetail from './FxDishdetailComponent.js';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			selectedDish: null
		};
	}

	componentDidMount() {console.log("Main codmponentDidMount")}

	onDishSelect(dishId) {this.setState({selectedDish: dishId});}

	render() {

		const HomePage = () => {
			return(
				<Home />
			);
		}

		console.log("Main Component render has been invoked");
	    return (
	      <div>
	      	<Header />

	      	<Switch>
	      		<Route path="/home" component={HomePage} />
	      		<Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes} />} />
	      		<Redirect to="/home" />
	      	</Switch>

	        <Menu dishes={this.state.dishes} 
	        	onClick={(dishId) => this.onDishSelect(dishId)} />

	        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

	        <Footer />
	      </div>
	    );
	  }

}



export default Main;