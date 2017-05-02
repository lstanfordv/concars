import React from 'react';


export default class extends React.Component {
  constructor() {
    super()
    
    this.state = {
      source: NaN,
      dest: NaN,
      weight: 'Weight'
    };

    this.handleChange = this.handleChange.bind(this);  
    this.clearInput = this.clearInput.bind(this);  
    this.setDefault = this.setDefault.bind(this);  
  }

/*componentWillUpdate(nextProps, nextState){
console.log("nextProps "+nextProps)
console.log("nextState "+nextState)

}*/

  handleChange(key) {
    
    return (e) => {
     
      var statics = {};
      var val
      
      if(key=='weight'){
        val = parseInt(e.target.value);
      }else{
        val=e.target.value; 
      }

      statics[key] =val
      this.setState(statics);
    };
  }

  clearInput() {
    this.setState({weight: ''})
  }

  setDefault() {
    if (typeof this.state.weight !== 'number') {
      this.setState({weight: 'Weight'})
    }
  }

  render() {


 
   var sourceNodes = this.props.nodes.
      map((node, i) => {
        return <option value={node._id} key={i}>{node.label}</option>
      });  

    sourceNodes.unshift(<option value={NaN} key='000'>{'Select Source'}</option>);

    var destNodes = this.props.nodes.
      filter((node, i) => {
        return node._id !== this.state.source;
      }).
      map((node, i) => {
        return <option value={node._id} key={i}>{node.label}</option>
      });

    destNodes.unshift(<option value={NaN} key='000'>{'Select Target'}</option>);
    var defaultValue = this.state.weight; 

    return (    
      <div className="input-group">
        <div className="input-group-btn">
          <select className="btn btn-default"
            onChange={this.handleChange('source')}>
            {sourceNodes}
          </select>
  
          <select className="btn btn-default"
            onChange={this.handleChange('dest')}>
            {destNodes}
          </select>
        </div>



        <input className="form-control"
          value={defaultValue}
          onFocus={this.clearInput}
          onBlur={this.setDefault}
          onChange={this.handleChange('weight')} 
        />
      
        <div className="input-group-btn">
          <button className="btn btn-primary"
          onClick={this.props.addArc.bind(null, this.state.source, this.state.dest, this.state.weight)}>
         
            Add Arc
          </button>
        </div>
      </div>
    );
  }
}
