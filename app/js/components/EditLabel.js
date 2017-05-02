import React, { Component } from 'react';
import { Grid, Row, Column } from 'react-cellblock';



export default class EditLabel extends Component {

    constructor() {
        super()
       

        this.state = {
            label: "",
            editing: ""
        };
       
        this.onChange = this.onChange.bind(this)
        this.onBlur = this.onBlur.bind(this)

    }

    componentWillReceiveProps(nextProps) {

       console.log("setting state: "+nextProps.label)
        this.setState({ label: nextProps.label })
    }
     componentDidMount() {
        console.log("componentDidMount"+this.props.label)
        this.setState({ label: this.props.label })
     }


    

    render() {

        return ( 
          <div>
            <input type = 'text'
              value = { this.state.label }
              onChange = { this.onChange }
              onBlur = { this.onBlur }
            />
          </div>
        )

    }

}
