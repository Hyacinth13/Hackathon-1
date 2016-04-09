import React from 'react';
import Messages from '../components/message/Messages';

class LandLordPage extends React.Component{
	render() {
		return(
			<div>
             <Messages category="landlord" />
      </div>
    );
	}
}

export default LandLordPage;
