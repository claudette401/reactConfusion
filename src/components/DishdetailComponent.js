import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component  {
	constructor(props) {
		super(props);


	}

	renderDish(dish) {
			return(
				<Card>
					<CardImg width="100" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
	}

	renderComments(dish) {
				const allComments = dish.comments.map((individ) => {
					return(
						<li key={individ.id}> {individ.comment} <br/> -- {individ.author},&nbsp;  
						{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).
						format(new Date(individ.date))}</li>
					);
			});
				return allComments;
	}
		

	render() {

		if (this.props.selectedDish == null) {return(<div></div>)}
		else {
			return(
	
			<div className="row justify-content-center">
				<div className="col-12 col-md-5 m-1">
					{this.renderDish(this.props.selectedDish)}
				</div>

				<div className="col-12 col-md-5 m-1">
					<ul className="list-unstyled">
						<h4>Comments</h4>
						{this.renderComments(this.props.selectedDish)}
					</ul>
				</div>
			</div>
		
		)}

	};
}


export default Dishdetail;