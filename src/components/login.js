import React, { Component } from 'react'
import { ref, firebaseAuth } from '../helpers/auth'

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()

        return firebaseAuth().signInWithEmailAndPassword(this.email.value, this.pass.value)
            .then((user) => {
                console.log('user', user)
            })
            .catch((error) => alert(error.message))
    }
    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" ref={(email) => this.email = email} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" ref={(pass) => this.pass = pass} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default Login;