import * as types from './actionTypes';

// const initialState = {
//     friends: [],
//     fetchingFriends: false,
//     loggingIn: false,
//     savingFriends: false,
//     error: null
// };

export function friendsReducer(friendsArray = [], action) {
    switch (action.type) {
        case types.GET_FRIENDS:
            return action.payload;
        case types.ADD_FRIEND:
            return friendsArray.concat(action.payload);
        default:
            return friendsArray;
    }
}

export function spinner(isOn = false, action) {
    switch (action.type) {
        case types.SPINNER_ON:
            return true;
        case types.SPINNER_OFF:
            return false;
        default:
            return isOn;
    }
}
