import React, { Component } from 'react';
import Autosuggest from 'react-bootstrap-autosuggest';
import { addCar, loadData } from '../utils';
import {Button} from 'react-bootstrap';

export default class AddCar extends Component {

    constructor() {
        super()

        this.state = {
          
            chosenName: [],
            chosenYear:[],
            id:''

        };

        this.onChangeName=this.onChangeName.bind(this)
        this.onChangeYear=this.onChangeYear.bind(this)
        this.addLocalCar=this.addLocalCar.bind(this)
        this.returnFunc=this.returnFunc.bind(this)
      
        this.loadData=loadData.bind(this)
    }

    componentDidMount() {
      
    }
    
    
    onChangeName(n){
    
     this.setState({chosenName:n})
      
    }


    onChangeYear(y){
    
     this.setState({chosenYear:y})
    
    }
    returnFunc(_id){

      console.log("returnFunc "+ _id)
      this.setState({id:_id})
      this.loadData("allcars", this.props.dataIsLoaded)
    }

    addLocalCar(e){
      {addCar(this.state, this.returnFunc)}
    }

    render() {

        var carNames=[
          "Acura",
          "BMW",
          "Buick",
          "Bugatti",
          "Chrysler",
          "Cadillac",
          "Chevrolet",
          "Dodge",
          "Ford",
          "GMC",
          "Honda",
          "Holden",
          "Infiniti",
          "Jaguar",
          "Lotus",
          "Lincoln",
          "Aston Martin",
          "Maserati",
          "Mazda",
          "Mercedes-Benz",
          "Mercury",
          "Nissan",
          "Opel",
          "Rolls Royce",
          "Tesla",
          "Toyota"
        ];

        var allYears=[]
        for (var i=1999; i<2018; i++){
          var y=i.toString()
        
          allYears.push(y)
        }

        const dstyle={'textAlign':'right', 'width':'100px' }
       

        return ( 
      
          <tr>
            <td width='50%'>
              <Autosuggest
                datalist={carNames}
                placeholder="Add a name..."
                valueIsItem
                itemValuePropName="name"
                onSelect={this.onChangeName}
             />
              </td>
               <td width='100%'>
              <Autosuggest
                datalist={allYears}
                placeholder="Year of production..."
                valueIsItem
                itemValuePropName="name"
                onSelect={this.onChangeYear}
             />
            </td>
            <td style={dstyle}>
              <Button onClick={this.addLocalCar}>Add Car</Button>
            </td>
          </tr>

        )        
    }
}
