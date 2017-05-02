import React from 'react';
import AddNode from './AddNode';
import AddArc from './AddArc';

export default class extends React.Component {
  //this is simply dictating the LAYOUT of the add node and arcs section 
  //and passing in the functions

  
  render() {
    return (
      <div className="toolBar toolBar--top">
        <div className="row">
          <div className="col-xs-5">
            <AddNode addNode={this.props.addNode} nodes={this.props.nodes} />
          </div>
          <div className="col-xs-12">
            <AddArc addArc={this.props.addArc} nodes={this.props.nodes} />
          </div>
        </div>
      </div>
    );
  }
};

