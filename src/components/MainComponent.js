import React, { Component } from 'react';
import Home from './HomeComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './FxMenuComponent.js';
import Dishdetail from './FxDishdetailComponent.js';
import Contact from './ContactComponent';
import About from './AboutComponent.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


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

		const DishWithId = ({match}) => {
			return(
				<Dishdetail 
					dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10)) [0]} 
					comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) } />
			);
		}


		console.log("Main Component render has been invoked");
	    return (
	      <div>
	      	<Header />

	      	<Switch>
	      		<Route path="/home" component={HomePage} />
	      		<Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes} />} />
	      		<Route path="/menu/:dishId" component={DishWithId} />
	      		<Route exact path="/contactus" component={Contact} />
	      		<Route exact path="/aboutus" component={ () => <About leaders={this.state.leaders} />} />
	      		<Redirect to="/home" />
	      	</Switch>



	        <Footer />
	      </div>
	    );
	  }

}



export default Main;