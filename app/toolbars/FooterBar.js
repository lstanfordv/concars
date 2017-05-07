import React, { Component } from 'react';
import Menu from 'components/Menu';

export default class FooterBar extends Component {
 
  render() {
  

    const footerstyle={
    
      backgroundColor: '#3f51b5',
      height: '64px',
      maxWidth: '900px',   
      padding: '20px',
      textAlign:'center'
    }
 

    return (
        <div style={footerstyle}>
     
                <img src='../app/img/greylogo.svg'/>
         
        </div>
    );
  }
};

