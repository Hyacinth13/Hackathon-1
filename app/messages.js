import React from 'react';
import ReactDOM from 'react-dom';
import MessagePage from './containers/MessagePage';

let id = window.location.pathname.split("/messages/")[1];

ReactDOM.render(<MessagePage id={id}/>, document.getElementById('content'));