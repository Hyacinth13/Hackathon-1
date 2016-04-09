import React from 'react';
import ReactDOM from 'react-dom';
import LandLordPage from './containers/LandLordPage';

let id = window.location.pathname.split("/landlord/")[1];

ReactDOM.render(<LandLordPage id={id}/>, document.getElementById('content'));
