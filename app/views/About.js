import React, { Component } from 'react';
import Menu from 'components/Menu'; 
import Label from 'components/Label';
import TopBar from '../toolbars/TopBar';
import FooterBar from '../toolbars/FooterBar';



export default class About extends Component {

    constructor() {
        super()

     
       
    }
 

    componentWillReceiveProps(nextProps) {

          }

   

    
    render() {

      const mytt= "Let us tell you how it works"
                 const pstyle={
                    fontSize: '20px',
                    lineHeight: '1.6em'                 
                    }      
        return (<div>
                    <TopBar titletext={mytt} /> 
            	<div className = 'About'>
                <h1>About</h1>
                <h3>    Our vision / Our challenge </h3>
                <div style={pstyle}>
				
Today’s cities are congested with too many cars on the roads slowing down productivity and polluting our environment. The transformation of mobility with autonomous cars will no doubt have a substantial, positive impact on congestion and productivity at a societal level.

But how do we attack the mobility related problems that we face today instead of waiting for a better future? Could we ease up traffic if we knew more about mobility patterns in Copenhagen? Could we detect potholes based on the suspension data and automatically send requests to get the road fixed? There is so much we can do and figure out! We believe the answer is called Connected Cars.

We are going to help everybody that owns a car first, this means everything from getting your car to the workshop to improve safety by providing proactive care and better information. All that is only the start, we have a lot of ideas we want to make, but we need you to help us!

Connected Cars is a company owned by Semler Gruppen A/S.

The team behind Connected Cars is highly skilled and complementary with a successful track record of startups incl. MobilePay.
            	</div>
       		</div>
 <FooterBar/>       
            </div>
        );
    }
}
