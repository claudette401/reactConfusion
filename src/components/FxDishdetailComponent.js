import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';




	function RenderDish({dish}) {
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

	function RenderComments({comments}) {
				const allComments = comments.map((aDish) => {
					return(
						<li key={aDish.id}> {aDish.comment} <br/> -- {aDish.author},&nbsp;  
						{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(aDish.date)))}</li>
					);
			});
				return allComments;
	}
		
	const Dishdetail = (props) => {

			if (props.dish == null) {return(<div></div>)}
			else {
				return( 
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12 col-md-5 m-1">
								<RenderDish dish={props.dish} />
							</div>

							<div className="col-12 col-md-5 m-1">
								<ul className="list-unstyled">
									<h4>Comments</h4>
									<RenderComments comments={props.dish.comments} />
								</ul>
							</div>
						</div>
					</div>
				);
			}
	}


export default Dishdetail;