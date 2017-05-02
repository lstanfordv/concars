import React from 'react';


export default class extends React.Component {
  constructor() {
    super()
    
    this.state = {
      label: '' 
    };

    this.handleChange = this.handleChange.bind(this);  
  }
  

  componentWillReceiveProps(nextProps) {
    
    //this is just for displaying a unique node name in the text field
    //it is NOT determining uniqueness of the node. That is done with "_id"
    var nodeid="Node_"+nextProps.nodes.length;
   
    this.setState({
      label: nodeid
    });

  }


  handleChange(key) {

    return (e) => {
      var statics = {};
      statics[key] = e.target.value;
      //statics updates state with the current name 
      //of the node while it changes IN THE FOCUS of the text field
      this.setState(statics);
    };

  }


  render() {
    var defaultValue = this.state.label;

    return (
      <div className="input-group">
        <input
          className="form-control"
          value={defaultValue}
          onChange={this.handleChange('label')} 
        />
        <span className="input-group-btn">

          <button className="btn btn-primary" 
           onClick={this.props.addNode.bind(null, this.state.label, 0)}>
            Add Node
          </button>
        </span>
      </div>
    );
  }
}
