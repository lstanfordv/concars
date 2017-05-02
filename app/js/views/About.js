import React, { Component } from 'react';
import Menu from 'components/Menu'; 
import Label from 'components/Label'


export default class About extends Component {

    constructor() {
        super()

        //instantiates the state
        //so it knows to look for them to populate
        this.state = {
           
            
        };

        /*local functions*/
        this.loadAbout=this.loadAbout.bind(this)
      
       
    }
 

    componentWillReceiveProps(nextProps) {

          }


    loadAbout() {
       
      return "here are some about stuff"
    }

   

    
    render() {

        return ( 
			<div>
				<Menu/>
            	<div className = 'About'>
					Here is a bunch of stuff about connected cars
            	</div>
       		</div>
        );
    }
}
