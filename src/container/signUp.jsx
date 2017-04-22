import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from "react-router"
import { AuthActions } from '../store/actions'
import { SignUpFrom } from '../components'

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            number: '',
            email: '',
            pass: '',
            address: ''
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isRegister.isRegister) {
            browserHistory.push('/login')
        }
        if (nextProps.isRegister.error) {
            console.log(nextProps.isRegister.error)
        }
    }
    submit(e) {
        e.preventDefault();
        this.props.register(this.state)
    }
    render() {
        return (
            <div>
                <SignUpFrom isLoading={this.props.isLoading} signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (obj) => {
            dispatch(AuthActions.register(obj))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isRegister: state.authReducer,
        isLoading: state.authReducer.isLoading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)