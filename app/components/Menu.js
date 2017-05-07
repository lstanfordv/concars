import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

export default class Menu extends Component{
  render() {

    const astyle={
   
        'borderRadius': '0',
        'backgroundColor':'#cc4250',
        'border': '0px',
        'width': 'auto',
        'padding': '12px 35px',
        'color': '#fff',
        'textTransform': 'uppercase',
        'textDecoration': 'none',
        'display': 'inline-block',
        'boxSizing': 'border-box'
      
    }
     const bstyle={
   
        'borderRadius': '0',
        'backgroundColor': 'color(#FF4355 blackness(20%))',
        'border': '1px solid white',
        'width': 'auto',
        'padding': '12px 35px',
        'color': '#fff',
        'textTransform': 'uppercase',
        'textDecoration': 'none',
        'display': 'inline-block',
        'boxSizing': 'border-box'
      
    }

   
    
  console.log("menu")
    return (
      <div className='Menu'>
       <Grid>
     
     
        <Row style={{float: 'left', paddingLeft: '5px'}}>
      
         <Col style={{float: 'bottom'}}>    
         <br/>
         <br/>
         <br/>
         <div>
          <Link to='/about'>   <div style={astyle}>About</div></Link>
    
          <Link to='/'> <div style={bstyle}>Cars</div></Link> 
         </div>
         </Col>
       </Row>
          
        </Grid>
      </div>
    );
  }
}
