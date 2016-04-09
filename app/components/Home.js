import React, {Component} from 'react';

class Home extends Component {
	render() {
  	return ( 
  		<div>
        <h1>Community Coms</h1>
        <a href='/landlord' className='btn'>LandLord Board</a>
        <a href='/community' className='btn'>Community Board</a>
    	</div>
    );
	}
}

export default Home;
