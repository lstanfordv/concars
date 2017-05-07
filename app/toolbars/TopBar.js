import React, { Component } from 'react';
import Menu from 'components/Menu';

export default class TopBar extends Component {
 
  render() {
  
    const tablestyle={
     maxWidth:'820px'

    }

    const headerstyle={
      backgroundColor: '#3f51b5',
      height: '64px',
      maxWidth: '820px',   
      padding: '20px'
    }
    const imgstyle={
      backgroundImage: "url('../app/img/openroad.png')",
      backgroundSize: '840px 300px',
      backgroundRepeat: 'no-repeat',
      padding: '40px',
      maxWidth:'820px',
      height: '300px'      
    }
    const aTextStyle={
    'fontFamily': 'Open Sans,Helvetica,Arial,sans-serif',
    'color': '#fff',
    'align':'right',
    'fontSize': '2.2rem',
    'fontWeight': '400'

    }

    return (
      <div>
        <table>
         <tbody>
            <tr>
              <td style={headerstyle}> 
                <img src='../app/img/whitelogo.svg'/>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td style={imgstyle}>
                <a style={aTextStyle}> {this.props.titletext} </a>
                <Menu/>
             
              </td>
            </tr>
          </tbody>
        </table>
         
         
        </div>
     
    );
  }
};

