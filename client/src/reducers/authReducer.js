// RESPONSIBLE FOR: recording whether or not a user is logged in

import { FETCH_USER } from '../actions/types';

// 3 scenerios for auth reducer
// 1 - returns null - pending promise resolution
// 2 - returns User model - request complete, user logged in
// 3 - return false - request done, use not logged in

export default function(state=null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }

}