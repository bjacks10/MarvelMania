import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService';
import auth from '../services/authService';

class RegisterForm extends Form {
    state={
        data: {username: '', password: '', name: ''},
        errors: {}
    };

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("Name")

    };

    doSubmit = async () => {
    //call the server
    try{
        const response = await userService.register(this.state.data);
        auth.loginWithJwt(response.headers['x-auth-token']);
        window.location = '/';
    }
    catch (ex)  {
        if(ex.response && ex.response.status ===400){
            const errors = {...this.state.errors};
            errors.username = ex.response.data;
            this.setState({errors});
        }
    }
    
    };

    render() {
        return ( 
        <div style={{marginTop:"50px"}} className="container">
        <div style={{width:"420px", justifyContent:"center", margin:"auto"}}>
            <h1 style={{marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderInput('name', 'Name')}
                {this.renderButton("Sign Up")}
            </form>
        </div>
        </div> );
    }
}
 
export default RegisterForm;