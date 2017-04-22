import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { SignInFrom } from '../components'
import { AuthActions } from '../store/actions'


export class Signin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            pass: ''
        }
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentWillReceiveProps(nextProp) {
        if (nextProp.isLoading) {
            browserHistory.push('/home')
        }
    }
    submit(e) {
        e.preventDefault();
        this.props.loginUser(this.state)
    }
    render() {
        return (
            <div>
                <SignInFrom isLoading={this.props.isLoading} state={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.authReducer.isLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (obj) => {
            dispatch(AuthActions.login(obj))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)