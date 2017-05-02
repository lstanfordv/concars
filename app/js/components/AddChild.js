import React, { Component } from 'react';
import EditLabel from '../components/EditLabel'
import { updateNode, updateArc } from '../utils'
import Autosuggest from 'react-bootstrap-autosuggest'



export default class AddChild extends Component {

    constructor() {
        super()

        this.state = {
          
            labels: []
        };

        this.onChange=this.onChange.bind(this)
        this.labelExists=this.labelExists.bind(this)

    }

     componentDidMount() {
        var allLabels=this.props.nodes.map(function(node, n) {
          return node.label;
        })

         this.setState({ labels: allLabels})
     }

    labelExists(l){
      var exists=false
      this.state.labels.map(function(label){
        if(label==l){
          exists= true;
        }
        
      })
      return exists;
     
    }


    onChange(e){
     

      if(this.labelExists(e)){
      }
    }

    render() {

        return ( 
          <table>
          <tbody>
            <tr>
              <td>
                <Autosuggest
                datalist={this.state.labels}
                placeholder="Add a child..."
                valueIsItem
                itemValuePropName="name"
                onSelect={this.onChange}
               />
              </td>
            </tr> 
          </tbody>
          </table>

)
            // <div> <a className = "createArc" href = "#" onClick = {() => this.props.addNode("New Node", this.props.nodeid) } > add child </a> </div> )

    }

}
