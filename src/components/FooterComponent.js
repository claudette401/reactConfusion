import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Footer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sections: [
				{id:0,cols:'col-12 col-sm-3',title:'Links',contents:'Home,About'},
				{id:1,cols:'col-12 col-sm-4',title:'Address',contents:'Home,About'},
				{id:2,cols:'col-12 col-sm-3',title:'Connect',contents:'Home,About'}
			]
		};
	};

	render () {
		const footer = this.state.sections.map((section) => {
			return (
				<div key={section.id} className={section.cols}>
					<div className="footer-section">
						<h2>{section.title}</h2>
						<p>{section.contents}</p>
					</div>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row footer">
					{footer}
				</div>
			</div>
		)
	};


}


export default Footer;