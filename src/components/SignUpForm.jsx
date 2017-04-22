import React, { Component } from 'react'
import * as mat from 'material-ui';

export class SignUpFrom extends Component {
    render() {
        const center = {
            width: '90%',
            margin: '0 auto'
        }
        return (
            <div style={center}>
                <mat.AppBar title="Register your account" showMenuIconButton={false} />
                <form onSubmit={this.props._submit} >
                    <mat.TextField
                        hintText="User Name"
                        name="username"
                        value={this.props.signUpState.username}
                        required fullWidth autoFocus
                        onChange={this.props._inputHandler}
                    /><br />

                    <mat.TextField
                        hintText="Number"
                        name="number"
                        type="number"
                        value={this.props.signUpState.number}
                        required fullWidth
                        onChange={this.props._inputHandler}
                    /><br />

                    <mat.TextField
                        type="email"
                        hintText="email"
                        name="email"
                        value={this.props.signUpState.email}
                        required fullWidth
                        onChange={this.props._inputHandler}
                    /><br />

                    <mat.TextField
                        type="password"
                        hintText="Password"
                        name="pass"
                        value={this.props.signUpState.pass}
                        required fullWidth
                        onChange={this.props._inputHandler}
                    />
                    <mat.TextField
                        hintText="Address"
                        name="address"
                        value={this.props.signUpState.address}
                        required fullWidth
                        onChange={this.props._inputHandler}
                    />
                    <br />
                    <mat.RaisedButton type="submit" label="Sign up" primary={true} />
                    {this.props.isLoading && <mat.CircularProgress size={30} style={{ top: 10, left: 10 }} />}
                </form>
            </div>
        )
    }
}