import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as mat from 'material-ui';

// import { Link } from "react-router"
// const NavBar = (this.props) => {
class NavBar extends Component {

    componentWillMount() {
        setTimeout(() => {
            if (!this.props.isLoggedin.isLoggedIn) {
                browserHistory.push('/login')
            }
        }, 1000)
    }
    render() {
        console.log(this.props.isLoggedin.isLoggedIn)

        return (

            <div>
                {(this.props.isLoggedin.isLoggedIn) ?
                    <div>
                        <mat.AppBar style={{ background: "darkCyan" }}
                            title="Inventory App"
                            showMenuIconButton={false}
                            iconElementRight={
                                <div>
                                    <mat.FlatButton label="Dashboard" labelStyle={{ color: 'white' }} />

                                    <mat.FlatButton label="Logout" onClick={this.props.logout} labelStyle={{ color: 'white' }} />
                                </div>
                            }
                        />
                        {this.props.children}
                        {console.log(this.props)}
                    </div>
                    : this.props.children
                }

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isLoggedin: state.authReducer
    }
}
export default connect(mapStateToProps, null)(NavBar);