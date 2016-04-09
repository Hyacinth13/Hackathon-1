import React from 'react';
import ReactDOM from 'react-dom';
import CommunityPage from './containers/CommunityPage';

let id = window.location.pathname.split("/community/")[1];

ReactDOM.render(<CommunityPage id={id}/>, document.getElementById('content'));