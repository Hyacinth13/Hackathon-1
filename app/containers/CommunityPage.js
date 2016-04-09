import React from 'react';
import Messages from '../components/message/Messages';

class CommunityPage extends React.Component{
	render() {
		return(
			<div>
             <Messages category="community" />
      </div>
    );
	}
}

export default CommunityPage;