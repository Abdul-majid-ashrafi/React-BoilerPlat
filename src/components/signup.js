import React, { Component } from 'react'
import { ref, firebaseAuth } from '../helpers/auth'
import { Router, Link } from 'react-router';
import Home from './home';


class Register extends Component {
    constructor() {
        super();

        this.handleDataSubmit = this.handleDataSubmit.bind(this);
    }

    handleDataSubmit(data) {
        console.log(data)
        console.log(this.context.router)
        this.props.router.push("/home");

        // return firebaseAuth().createUserWithEmailAndPassword(data.email, data.pass)
        //     .then((user) => {
        //         return ref.child(`users/${user.uid}`)
        //             .set({
        //                 email: user.email,
        //                 uid: user.uid,
        //                 name: data.username,
        //                 num: data.num
        //             })
        //             .then(() => console.log(user))
        //     })
        //     .catch((error) => alert(error.message))
    }
    render() {
        return (
            <div className='commentBox'>
                <Form getData={this.handleDataSubmit} />
            </div>
        );
    }
}

class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getData({
            email: this.email.value,
            pass: this.pass.value,
            username: this.username.value,
            num: this.num.value
        })
    }
    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" defaultValue="mani@example.com" ref={(email) => this.email = email} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" defaultValue="mani12" ref={(pass) => this.pass = pass} />
                    </div>
                    <div className="form-group">
                        <label>User name</label>
                        <input type="text" className="form-control" placeholder="UserName" defaultValue="Majid khan" ref={(username) => this.username = username} />
                    </div>
                    <div className="form-group">
                        <label>User Number</label>
                        <input type="Number" className="form-control" placeholder="Number" defaultValue="132" ref={(num) => this.num = num} />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

                <Link to="/aboutnested">inz home</Link>

            </div>
        )
    }
}

Register.contextTypes = {
    router: React.PropTypes.object.isRequired
}
export default Register;
                // <span className="pull-right"><Link className="nav-link" to="/login">Login?</Link></span>
