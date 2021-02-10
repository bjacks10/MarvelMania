import React, { Component } from 'react';
import auth from '../../services/authService';

class Logout extends Component {
    async componentDidMount(){
        auth.logout();
        //THIS IS WHERE THE UPDATEUSERFAVES FUNCTION SHOULD BE CALLED
        //await updateUserFaves(user);
        window.location = '/';
    }

    render() { 
        return null;
    }
}
 
export default Logout;