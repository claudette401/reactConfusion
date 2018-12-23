import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, Col, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl.js';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }



    toggleModal() {
		this.setState (		{isModalOpen: !this.state.isModalOpen}	);
	}

	handleComment (values) {
		this.toggleModal();
		console.log("Current State is: " + JSON.stringify(values));
    	alert("Current State is: " + JSON.stringify(values));
		this.props.postComment(this.props.dishId, values.rating, values.yourname, values.message);
	}


    render () {
    	return(
    	<div>
    		<button className="btn" onClick={this.toggleModal}><span className="fa fa-large fa-edit"></span>Submit Comment</button>


		    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
	        	<ModalHeader toggle={this.toggleModal}>Create a Comment</ModalHeader>
	        	<ModalBody>
	                <LocalForm onSubmit={(values) => this.handleComment(values)}>

	                	<Row className="form-group">
	                		<Label htmlFor="rating" md={3}>Rating</Label>
		                    <Col md={9}>
	                            <Control.select model=".rating" className="form-control" name="rating" defaultValue="5">
	                                <option>1</option>
	                                <option>2</option>
	                                <option>3</option>
	                                <option>4</option>
	                                <option>5</option>
	                            </Control.select>
	                        </Col>
	                    </Row>

	                    <Row className="form-group">
	                        <Label htmlFor="yourname" md={3}>Your Name</Label>
	                        <Col md={9}><Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name" className="form-control" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}} /></Col>
	                        <Errors className="text-danger" model=".yourname" show="touched" messages={{required:'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 or less characters'}} />
	                    </Row>

	                    <Row className="form-group">
	                        <Label htmlFor="message" md={3}>Your Feedback</Label>
	                        <Col md={9}>
	                            <Control.textarea model=".message" className="form-control" id="message" name="message" placeholder="Your Comment" rows="6" />
	                        </Col>
	                    </Row>

	                    <Row className="form-group">
	                        <Col md={{size: 9, offset: 3}}>
	                            <Button type="submit" color="primary">Send Feedback</Button>
	                        </Col>
	                    </Row>

	                </LocalForm>
	        	</ModalBody>
	        </Modal>

	    </div>
    	)
    }

}




	function RenderDish({dish}) {
			return(
				<FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
					<Card>
						<CardImg width="100" src={baseUrl + dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</FadeTransform>
			);
	}

	function RenderComments({comments, postComment, dishId}) {
			if (comments !=null)
				return(
					<div className="col-12 col-md-5 m-1">
						<h4>Comments</h4>
						<ul className="list-unstyled">
							<Stagger in>
								{comments.map((aDish) => {
									return(
										<Fade in>
										<li key={aDish.id}> {aDish.comment} <br/> -- {aDish.author},&nbsp; {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(aDish.date)))}</li>	
										</Fade>
									);
								})}
							</Stagger>
						</ul>

						<CommentForm postComment={postComment} dishId={dishId} />

					</div>
				);
	}
		
	const Dishdetail = (props) => {
			if (props.isLoading) {
				return(
					<div className="container">
						<div className="row">
							<Loading />
						</div>
					</div>
				);
			}
			else if (props.errMess) {
				return(
					<div className="container">
						<div className="row">
							<h4>{props.errMess}</h4>
						</div>
					</div>
				);
			}
			else if (props.dish != null) {
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
							
							<RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />

						</div>
					</div>
				);
			}
	}


export default Dishdetail;