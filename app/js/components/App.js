import React, { Component } from 'react';
// import TopBar from '../toolbars/TopBar';
import { loadData, addCar/*, postData, deleteNode, deleteArc, addNode, addArc, updateArcIDX, updateNodeIDX  */} from '../utils';
import Cars from '../views/Cars';


import Menu from 'components/Menu';


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
                 
      
        return (<div>
            		<Menu/>
           		
            		<Cars
                        allcars={this.state.allcars}
                        dataIsLoaded={this.dataIsLoaded}


                    /> 			
            	</div>
        );
    }
}
