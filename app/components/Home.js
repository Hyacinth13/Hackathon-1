import React, {Component} from 'react';

class Home extends Component {
	render() {
  	return ( 
  		<div className='parallax-container'>	
	  		<div className='background'>
	  			<div className='center-align'>
	          <h1 className='grey-text text-darken-3'>Select A Message Board</h1>
	        </div> 
	        <div className='center-align'>
	        	<a href='/landlord' className='btn-large card grey darken-3 red-text red-darken-3'>LandLord Board</a>
	        </div>
	        <div className='center-align'>	
	        	<a href='/community' className='btn-large card grey darken-3 red-text red-darken-3'>Community Board</a>
	        </div>	
    		</div>
    	</div>

    );
	}
}

export default Home;
