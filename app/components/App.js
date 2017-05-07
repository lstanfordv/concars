import React, { Component } from 'react';
import { loadData, addCar } from '../utils';
import Cars from '../views/Cars';
import TopBar from '../toolbars/TopBar'
import FooterBar from '../toolbars/FooterBar'





export default class About extends Component {

    constructor() {
        super()

        this.state = {
         allcars:[]

        };

		//from utils:
        this.loadData = loadData.bind(this);
        this.addCar=addCar.bind(this)


        this.dataIsLoaded=this.dataIsLoaded.bind(this)

    }

    componentDidMount() {  
        this.loadData('allcars', this.dataIsLoaded);
    }

    dataIsLoaded(cars){
       cars.map(function(car){
         console.log("dataisloaded "+car.name)
       })
      
        this.setState({allcars:cars})
       
    }
     

    render() {
       this.state.allcars.map(function(car, c){
        console.log("render "+car.name)
       })

      const mytt= "Here is a list of all the cars to which you have a connection."
                 
      
        return (<div>
                  <TopBar titletext={mytt} />	

            	   	<Cars
                        allcars={this.state.allcars}
                        dataIsLoaded={this.dataIsLoaded}
                    />

                  <FooterBar/>		
            	</div>
        );
    }
}
