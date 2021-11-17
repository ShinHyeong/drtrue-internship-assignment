import React, { Component } from "react";
import InstagramLogin, {style} from 'react-instagram-login';

class Instagram extends Component{
    responseInstagram =(response)=> {
        console.log(response);
    }

    style = {
        background: '#fff',
    }

    render(){
        return (
            <div>
                <InstagramLogin
                clientId="497169141577688"
                buttonText="Login with Instagram"
                onSuccess={this.responseInstagram}
                onFailure={this.responseInstagram}
              />
            </div>
        )
    }
}
export default Instagram;