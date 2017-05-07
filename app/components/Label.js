import React, { Component } from 'react';
import EditLabel from '../components/EditLabel'
import { updateCar, loadData, deleteCar } from '../utils'



export default class Label extends Component {

    constructor() {
        super()

        this.state = {
          carName:'',
          year:9999,
          IDX:'',
          editing:''

        };

        //local functions
        this.toggleEditing=this.toggleEditing.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.onEnter = this.onEnter.bind(this)
        this.retFunc=this.retFunc.bind(this)

        //global function
        this.updateCar=updateCar.bind(this)
        this.loadData=loadData.bind(this)
        this.deleteCar=deleteCar.bind(this)


      
     
    }   

    componentWillReceiveProps(nextProps) {
        this.setState({carName: nextProps.name, year:nextProps.year, IDX:nextProps.carIDX})
 
    }

    toggleEditing(carId) {
        this.setState( { editing: carId } );
    }

    componentDidMount() {
        this.setState({carName: this.props.name, year:this.props.year, IDX:this.props.carIDX})
 
           }

    onChangeName(e) {

         this.setState({ carName: e.target.value });
    }
    onChangeYear(e) {
    
        this.setState({ year: e.target.value });
    }

    retFunc(){

      this.loadData("allcars", this.props.dataIsLoaded)
    }

    onBlur(e) {
      this.setState({ editing: "" })
    }

    onEnter(e){
      if(e.which==13){
        this.setState({ editing: "" })
        var data={carName: this.state.carName, year:this.state.year, carIDX:this.state.IDX}        
        this.updateCar(data, this.retFunc)
      }
    }
      
    renderItemOrEditField( ) {
    
    
      
        if ( this.state.editing === "carName") {
          
          return (
           <tr>
  <td>
            <input type = 'text'
              value = { this.state.carName }
              onChange = { this.onChangeName }
              onBlur = { this.onBlur }
              onKeyPress={ this.onEnter}
            />
            </td>
            <td>
</td>
<td>
</td>
          </tr>
            )

        } else if ( this.state.editing === "year") {
          
          return (
           <tr>
           <td>
</td><td>

            <input type = 'text'
              value = { this.state.year }
              onChange = { this.onChangeYear}
              onBlur = { this.onBlur }
              onKeyPress={ this.onEnter}
            />
            </td>
            <td>
</td>
          </tr>
            )

        } else{
          const dStyle={
            'fontSize':'18px',
            textAlign:'center',
             'width':'100px'
          }
         
          return (

                <tr>
                  
                  <td width='50%' onClick={ this.toggleEditing.bind(null, "carName") } >
                    <font color="blue"> {this.state.carName}</font>
                  </td>
                  <td width='100%' onClick={ this.toggleEditing.bind(null, "year") } >
                    <font color="black"> {this.state.year}  </font>
                  </td>
                  <td className="close" 
                    style={dStyle} 
                    href="#" 
                    onClick={() => this.deleteCar(this.props.carIDX, this.retFunc)}>
                    X
                  </td>
                
              </tr>
              
            
           
          )      
       }
    }
  
    render() {
     const pstyle={
        fontSize: '18px',
        lineHeight: '2em'   
     }
      return (<table style ={pstyle}>{this.renderItemOrEditField()}</table> )
   
    }
   
}