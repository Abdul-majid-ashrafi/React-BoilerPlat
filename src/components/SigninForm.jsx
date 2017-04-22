import React from "react"
import * as mat from 'material-ui';

export const SignInFrom = (props) => {
    const center = {
        width: '40%',
        margin: '0 auto',
        marginTop: '5%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        padding: '15px',
        // background: 'url(http://www.texturex.com/albums/Sky-Textures/cloud%20texture%20above%20clouds%20fairy%20tale%20sky%20texture.jpg), center center,  no-repeat',
        // background: 'url(http://www.henryshouse.org/images/aboutusbackground-crop-u12582.png), center center,  no-repeat',
        background: 'url(http://www.template-joomspirit.com/template-joomla/template-108/images/background/light-cyan-NR.jpg), center center,  no-repeat',
        // background: 'url(http://wallpaperpulse.com/thumb/1095204.jpg), center center,  no-repeat',
    }
    return (
        <div style={center}>
            <mat.AppBar title="Login your account" showMenuIconButton={false} />
            <form onSubmit={props._submit} style={{ padding: 50 }}>

                <mat.TextField
                    type="email"
                    hintText="email"
                    name="email"
                    value={props.state.email}
                    required fullWidth
                    onChange={props._inputHandler}
                /><br />

                <mat.TextField
                    type="password"
                    hintText="Password"
                    name="pass"
                    value={props.state.pass}
                    required fullWidth
                    onChange={props._inputHandler}
                />
                <br />
                <mat.RaisedButton type="submit" label="Login" primary={true} />
                {props.isLoading && <mat.CircularProgress size={30} style={{ top: 10, left: 10 }} />}

            </form>
        </div>
    )
}