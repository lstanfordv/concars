import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component{
  render() {
  console.log("menu")
    return (
      <div className='Menu'>
       
        <Link to='/about'>   About   </Link>
        <Link to='/'>   Cars   </Link> 
     
        <hr />
      </div>
    );
  }
}
