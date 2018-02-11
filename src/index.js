/**
 * created by dtolife on 2018/2/10
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd-mobile/dist/antd-mobile.css';
import Root from './routes/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Root />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
