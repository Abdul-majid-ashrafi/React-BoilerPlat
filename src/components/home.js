import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello Home</h1>
                <Link to="/homenested">Home</Link>
                <Link to="/aboutnested">About</Link>
                {this.props.children}
            </div>
        );
    }
}

export default Home;
