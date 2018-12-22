import React, { Component } from 'react';
import { Button, Label, Col, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	isModalOpen: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    handleSubmit(values) {
    	console.log("Current State is: " + JSON.stringify(values));
    	alert("Current State is: " + JSON.stringify(values));
    }

    toggleModal() {
		this.setState (		{isModalOpen: !this.state.isModalOpen}	);
	}

	handleComment() {
		this.toggleModal();
		this.props.addComment(this.props.dishId, values.rating, values.yourname, values.message);
	}


    render () {
    	return(
    	<div>
    		<button className="btn" onClick={this.toggleModal}><span className="fa fa-large fa-edit"></span>Submit Comment</button>


		    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
	        	<ModalHeader toggle={this.toggleModal}>Create a Comment</ModalHeader>
	        	<ModalBody>
	                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

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


export default CommentForm;