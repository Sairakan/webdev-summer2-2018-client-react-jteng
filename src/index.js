import React from 'react'
import ReactDOM from 'react-dom'
import WhiteBoard from './containers/WhiteBoard';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/react-toggle-switch/dist/css/switch.min.css';

ReactDOM.render(
    <WhiteBoard />,
    document.getElementById('root')
);