import React, { Component } from 'react';
import Label from 'components/Label'
import AddCar from 'components/AddCar'
import {loadData} from '../utils'

export default class Cars extends Component {

    constructor() {
        super()

        //instantiates the state
        //so it knows to look for them to populate
        this.state = {
           
           allcars:[]          
            
        };

        /*local functions*/
       
        this.createList=this.createList.bind(this)
             
    }
 

    componentWillReceiveProps(nextProps) {
        this.setState({allcars:nextProps.allcars})
    }

   
    createList(){

        var dataIsLoaded=this.props.dataIsLoaded.bind();
        
        var fullList=this.state.allcars.map(function(car, c){
            console.log("createList "+car.name)

            return(<div key={c}>
                <Label 
                    name={car.name} 
                    year= {car.year} 
                    carIDX={car._id}  
                    dataIsLoaded={dataIsLoaded}/>
                </div>)

        })
        
       return fullList;
    
    }
   

    
    render() {
       
        return ( 
            <div>
                <AddCar 
                    allcars={this.props.allcars}
                    dataIsLoaded={this.props.dataIsLoaded}
                />
                <br/>
                <div className = 'ChooseCar'>{ this.createList() }</div>
                  
            </div>
        );
    }
}
