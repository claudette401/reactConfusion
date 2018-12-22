import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CommentForm from './CommentForm.js';

class Dishdetail extends Component  {
	constructor(props) {
		super(props);
	}

	componentDidMount() {console.log("Dishdetail componentDidMount")}
	componentDidUpdate() {console.log("Dishdetail componentDidMount")}

	renderDish(dish) {
			return(
				<Card>
					<CardImg width="100" src={dish.image} alt={this.props.dish.name} />
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
						{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(individ.date)))}</li>
					);
			});
				return allComments;
	}
		

	render() {
			console.log("Dishdetail Component render has been invoked");
			if (this.props.dish == null) {return(<div></div>)}
			else {
				return( 
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12 col-md-5 m-1">
								{this.renderDish(this.props.dish)}
							</div>

							<div className="col-12 col-md-5 m-1">
								<ul className="list-unstyled">
									<h4>Comments</h4>
									{this.renderComments(this.props.dish)}
								</ul>

								<CommentForm />
							</div>
						</div>
					</div>
				)
			}


	}
}


export default Dishdetail;