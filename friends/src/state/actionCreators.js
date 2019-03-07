import * as types from './actionTypes';
import axios from '../axios/axios';

// const URL = 'http://localhost:5000/api/friends';

export const login = user => dispatch => {
    dispatch(spinnerOn());
    axios().post(`http://localhost:5000/api/login`, user)
        .then(token => {
            localStorage.setItem('token', token.data.payload);
            dispatch(spinnerOff());
        })
        .catch(error => {
            dispatch(throwError(error.message))
        })
};

export const getFriendsAsync = () => dispatch => {
    dispatch(spinnerOn());
    axios().get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type: types.GET_FRIENDS, payload: res.data });
            dispatch(spinnerOff());
        });
};

export const addFriendAsync = friend => dispatch => {
    dispatch(spinnerOn());
    axios().post(`http://localhost:5000/api/friends`, friend)
        .then(res => {
            console.log(friend);
            console.log(res.data);
            dispatch({ type: types.ADD_FRIEND, payload: res.data });
            dispatch(spinnerOff());
        });
};

export function spinnerOn() {
    return {
        type: types.SPINNER_ON,
    };
}

export function spinnerOff() {
    return {
        type: types.SPINNER_OFF,
    };
}

export function throwError(error) {
    return {
        type: types.THROW_ERROR,
        payload: error,
    };
}