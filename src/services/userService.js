import http from './httpService';
import {apiUrl } from "../config.json";

const apiEndpoint = '/users';

export function register(user){
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name
    });
}

//works
export function getAllUsers(){
    return http.get(apiEndpoint);
}

//works
export function getUser(userId){
    return http.get(apiEndpoint + "/" + userId);
}

//works
export function getUserFaves(userId){
    return http.get(apiEndpoint + '/' + userId+ "/favorites");
}


export function updateUserFaves(user){
    if(user._id){
        const body = {...user};
        delete body._id;
        return http.put(apiEndpoint + '/' + user._id, body);
    }
}

