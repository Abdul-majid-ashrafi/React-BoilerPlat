import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import NestedHome from './components/homenestedroute';
import NestedAbout from './components/aboutnestedroute';
// import Nav from './components/nav.js';
import './index.css';
// import ReactRouter from 'react-router';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/home" component={Home}>
            <Route path="/homenested" component={NestedHome}></Route>
            <Route path="/aboutnested" component={NestedAbout}></Route>
        </Route>

        <Route path="/" component={App}>
            <IndexRoute component={SignUp} />
        </Route>


    </Router>
),
    document.getElementById('root')
);
