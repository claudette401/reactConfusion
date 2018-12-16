import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



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

			if (props.dish != null) {
				return( 
					<div className="container">
						<div className="row">
							<Breadcrumb>
								<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>	
								<BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
								<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
							</Breadcrumb>
							<div className="col-12">
								<h3>{props.dish.name}</h3>
								<hr/>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="col-12 col-md-5 m-1">
								<RenderDish dish={props.dish} />
							</div>

							<div className="col-12 col-md-5 m-1">
								<ul className="list-unstyled">
									<h4>Comments</h4>
									<RenderComments comments={props.comments} />
								</ul>
							</div>
						</div>
					</div>
				);
			}
	}


export default Dishdetail;