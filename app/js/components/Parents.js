import React, { Component } from 'react';


export default class Parents extends Component {

    constructor() {
        super()

        this.state = {
          nodes:[],
          arcs:[],
          nodeid:''
        };

        this.getParents=this.getParents.bind(this)
        this.getLabel=this.getLabel.bind(this)

    }
   
    getLabel(nid){
      var nodes=this.props.nodes
      var retLabel
      nodes.map(function(node, n){
        if(node._id==nid){
         retLabel=node.label
        }
      })
      return retLabel
    }

    getParents(){
      var arcs=this.props.arcs
      var nodeid=this.props.nodeid

      var parentsArr=[]
      arcs.map(function(arc, a){
        if(arc.dest==nodeid){
         
          var p=this.getLabel(arc.source)
          var w=arc.weight
         
          parentsArr.push({label:p, weight:w})
        }
      }, this)

      return parentsArr
    }


    render() {      
     
      var parents=this.getParents()
      var parentStr='';
      parents.map(function(p){
        parentStr+=p.label+"("+p.weight+") "
        
      })
     
      var pStyle={
        fontSize:'10px'
      }


        return (<div>Parents: <a style={pStyle}>{parentStr}</a></div>)
    }

}
