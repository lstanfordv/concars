import React, { Component } from 'react';
import Autosuggest from 'react-bootstrap-autosuggest'
import { addCar, loadData } from '../utils'


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

        var carNames=["Ford", "Tesla", "BMW", "Audi"];
        var allYears=[]
        for (var i=1999; i<2018; i++){
          var y=i.toString()
        
          allYears.push(y)
        }

        const dstyle={'text-align':'right'}
        const tstyle={'width':'100%'}

        return ( 
          <table style={tstyle}>
          <tbody>
            <tr>
              <td>
                <Autosuggest
                style={tstyle}
                datalist={carNames}
                placeholder="Add a name..."
                valueIsItem
                itemValuePropName="name"
                onSelect={this.onChangeName}
               />
                </td>
                 <td>
                <Autosuggest
                datalist={allYears}
                placeholder="Year of production..."
                valueIsItem
                itemValuePropName="name"
                onSelect={this.onChangeYear}
               />
               </td>
               </tr>
               </tbody>
               <tbody>
               <tr>
              <td>
              </td> 
               <td style={dstyle}>
              <button onClick={this.addLocalCar}>Add Car</button>
              </td>
              </tr>
              </tbody>
          
        
          </table>

        )
        
    }

}
