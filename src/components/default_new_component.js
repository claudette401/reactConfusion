import React, { Component } from 'react'l
	//extend the react 'Component' to make our user-defined Menu
class Menu extends Component {
	//this makes a Menu and gives the props to Menu's super class
	constructor(props) {
		super(props); 
	}

	//the render function needs to be here to tell the component what to give to the DOM
	render() {
		return (
			<div className="container">
				<div className="row">
						"Here is some shit to display";				
				</div>
			</div>
		);	
	}
} 

//if you don't export, you won't be able to use your new component anywhere
export default Menu;





	//bring in the Component from react and the Media component from reactstrap
import React, { Component } from 'react';
import { Media } from 'reactstrap';



	//extend the react 'Component' to make our user-defined Menu
class Menu extends Component {
	//this makes a Menu and gives the props to Menu's super class
	constructor(props) {
		super(props); 

		//the state stores properties for the component that can be used
		this.state = {
			//an array of objects to use in Menu
			dishes: [                
			   {
                  id: 0,
                  name:'Uthappizza',
                  image: 'assets/images/uthappizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
               {
                  id: 1,
                  name:'Zucchipakoda',
                  image: 'assets/images/zucchipakoda.png',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
               {
                  id: 2,
                  name:'Vadonut',
                  image: 'assets/images/vadonut.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
               {
                  id: 3,
                  name:'ElaiCheese Cake',
                  image: 'assets/images/elaicheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
            ],
		};
	}

	//the render function needs to be here to tell the component what to give to the DOM
	render() {
		//define any javascript needed for rendering using component state (this needs to be constructed above)
		  //map = iterate over array and gives (=>).  each item must have a key handler.
		const menu = this.state.dishes.map((dish) => {
			return ( 
				<div key={dish.id} className="col-12 mt-5"> //mt = margin top
					<Media tag="li">
						<Media left middle> //syntax comes from Bootstrap image handling
							<Media object src={dish.image} alt={dish.name} />
						</Media>
						<Media body className="ml-5"> //ml = margin left
							<Media heading>{dish.name}</Media>
							<p>{dish.description}</p>
						</Media>
					</Media>
				</div>
			);
		});  


			//what JSX to render
		return (
			<div className="container">
				<div className="row">
					//we want to display a list of dishes
					<Media list>
						//use the above javascript variables to render some shit
						{menu}
					</Media>
				</div>
			</div>
		);	
	}
} 

//if you don't export, you won't be able to use your new component anywhere
export default Menu;