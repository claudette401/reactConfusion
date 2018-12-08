import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';


class Menu extends Component {
	constructor(props) {
		super(props); 

		this.state = {
			selectedDish: null
		}

		console.log("Menu Component constructor has been invoked");
	}

	onDishSelect(dish) {this.setState({selectedDish: dish});}



	render() {
		const menu = this.props.dishes.map((dish) => {
			return ( 
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card onClick={()=>this.onDishSelect(dish)}>
						<CardImg width="100" src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});  
		console.log("Menu Component render has been invoked");

		return (
			<div className="container">
				<div className="row justify-content-center">
					{menu}
				</div>
				


				<div className="row justify-content-center">
					<Dishdetail selectedDish={this.state.selectedDish} />
				</div>

			</div>
		);	

	}

	componentDidMount() {console.log("Menu Component componentDidMount has been invoked");}
} 

export default Menu;