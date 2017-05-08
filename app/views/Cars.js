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

            return( 
                    
                        <Label
                            key ={c} 
                            name={car.name} 
                            year= {car.year} 
                            carIDX={car._id}  
                            dataIsLoaded={dataIsLoaded}
                        />
                   
                )

        })
        
       return fullList;
    
    }
   

    
    render() {
         const tstyle={'maxWidth':'860px'}
          const pstyle={
                    fontSize: '18px',
                    lineHeight: '1.6em'                 
                    }  
       
        return ( 
            <div>
            <h1>Your Cars</h1>
            <hr/>
            <table style={tstyle}>
            <tbody>
                <AddCar 
                    allcars={this.props.allcars}
                    dataIsLoaded={this.props.dataIsLoaded}
                />
            
            <br/><br/>
          
          <tr >
            <td width='50%'>
           <b style={pstyle}>  MAKE </b>

            </td>
            <td width='100%'>
              <b style={pstyle}> PRODUCTION YEAR </b>
            </td>
            <td width='100px'>
             <b style={pstyle}>  DELETE </b>
            </td>
          </tr>
            </tbody>   
            </table>
             
            
                <div className = 'ChooseCar'>{ this.createList() }</div>
             
            </div>
        );
    }
}
