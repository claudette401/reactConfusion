import React, { Component } from 'react';

class Footer extends Component {

	constructor(props) {
		super(props);

			var linkContent =	
				<ul className="list-unstyled">
	                <li><a href="index.html">Home</a></li>
	                <li><a href="aboutus.html">About</a></li>
	                <li><a href="index.html">Menu</a></li>
	                <li><a href="index.html">Contact</a></li>
	            </ul>;

			var	addressContent =
				<ul className="list-unstyled">
					<li>121 Clear Water Bay Road</li>
	                <li>Clear Water Bay, Kowloon</li>
	                <li>HONG KONG</li>
	                <li>Tel.: 852 1234 5678</li>
	                <li>Fax: 852 8765 4321</li>
	                <li>Email: <a href="mailto:confusion@food.net">confusion@food.net</a></li>
	            </ul>;

	       var	connectContent =
	       		<ul className="list-unstyled">
	       			<li><a href="http://google.com/+">Google+</a></li>
		            <li><a href="http://www.facebook.com/profile.php?id=">Facebook</a></li>
		            <li><a href="http://www.linkedin.com/in/">LinkedIn</a></li>
		            <li><a href="http://twitter.com/">Twitter</a></li>
		            <li><a href="http://youtube.com/">YouTube</a></li>
		            <li><a href="mailto:">Mail</a></li>
		        </ul>;
	
		this.state = {
				sections: [
					{id:0,cols:'col-12 col-md-3 footer-section',title:'Links', contents: linkContent},
					{id:1,cols:'col-12 col-md-5 footer-section',title:'Our Address',contents: addressContent},
					{id:2,cols:'col-12 col-md-3 footer-section',title:'Connect',contents: connectContent}
				]
		}
	};
	

	render() {
		const footer = this.state.sections.map((section) => {
			return (
					<div className={section.cols} key={section.id} >
						<h2>{section.title}</h2>
						{section.contents}
					</div>

			);
		});

		return (
			<div className="container-fluid">
				<div className="row footer justify-content-center">
					{footer}
				</div>
			</div>

		)
	};


}



export default Footer;