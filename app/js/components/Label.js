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


        //this.updateArc=updateArc.bind(this)
      
     
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

      console.log("retFunc")
      this.loadData("allcars", this.props.dataIsLoaded)
    }
    onBlur(e) {
      this.setState({ editing: "" })
      //TODO: update node on db
    }
    onEnter(e){
      if(e.which==13){
        this.setState({ editing: "" })
        var data={carName: this.state.carName, year:this.state.year, carIDX:this.state.IDX}
        
        this.updateCar(data, this.retFunc)
      
      }
    }
      

    renderItemOrEditField( ) {
       const dStyle={
        'fontSize':'12px',
       
   
       }
    
      
        if ( this.state.editing === "carName") {
          
          return (
           <div>
            <input type = 'text'
              value = { this.state.carName }
              onChange = { this.onChangeName }
              onBlur = { this.onBlur }
              onKeyPress={ this.onEnter}
            />
          </div>
            )

        } else if ( this.state.editing === "year") {
          
          return (
           <div>
            <input type = 'text'
              value = { this.state.year }
              onChange = { this.onChangeYear}
              onBlur = { this.onBlur }
              onKeyPress={ this.onEnter}
            />
          </div>
            )

        } else{
         
          return (
            <div>
              <a onClick={ this.toggleEditing.bind(null, "year") } >
                 <font color="black">( {this.state.year} ) </font>
              </a>
              <a onClick={ this.toggleEditing.bind(null, "carName") } >
               <font color="black"> {this.state.carName}</font>
              </a>
              <a className="close" 
                style={dStyle} 
                href="#" 
                onClick={() => this.deleteCar(this.props.carIDX, this.retFunc)}>
                Delete car
              </a>
                       
            </div>
           
          )      
       }
    }
  
    render() {
     
      return (<div>{this.renderItemOrEditField()}</div> )
   
    }
   
}