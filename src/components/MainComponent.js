import React, { Component } from 'react';
import Home from './HomeComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './FxMenuComponent.js';
import Dishdetail from './FxDishdetailComponent.js';
import Contact from './ContactComponent'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS
		};
	}

	componentDidMount() {console.log("Main codmponentDidMount")}


	render() {

		const HomePage = () => {
			return(
				<Home 
					dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
			);
		}

		console.log("Main Component render has been invoked");
	    return (
	      <div>
	      	<Header />

	      	<Switch>
	      		<Route path="/home" component={HomePage} />
	      		<Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes} />} />
	      		<Route exact path="/contactus" component={Contact} />
	      		<Redirect to="/home" />
	      	</Switch>



	        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

	        <Footer />
	      </div>
	    );
	  }

}



export default Main;