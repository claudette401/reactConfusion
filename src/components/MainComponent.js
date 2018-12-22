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

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
}

class Main extends Component {



	componentDidMount() {console.log("Main codmponentDidMount")}


	render() {

		const HomePage = () => {
			return(
				<Home 
					dish={this.props.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
			);
		}

		const DishWithId = ({match}) => {
			return(
				<Dishdetail 
					dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10)) [0]} 
					comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) } />
			);
		}


		console.log("Main Component render has been invoked");
	    return (
	      <div>
	      	<Header />

	      	<Switch>
	      		<Route path="/home" component={HomePage} />
	      		<Route exact path="/menu" component={ () => <Menu dishes={this.props.dishes} />} />
	      		<Route path="/menu/:dishId" component={DishWithId} />
	      		<Route exact path="/contactus" component={Contact} />
	      		<Route exact path="/aboutus" component={ () => <About leaders={this.props.leaders} />} />
	      		<Redirect to="/home" />
	      	</Switch>



	        <Footer />
	      </div>
	    );
	  }

}



export default withRouter(connect(mapStateToProps)(Main));