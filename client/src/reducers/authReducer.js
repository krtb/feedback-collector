// RESPONSIBLE FOR: recording whether or not a user is logged in

// takes two args: STATE & ACTION
// state is for this reducer, action is action object with different types
export default function(state={}, action) {
    console.log(action, 'actions FROM authReducer')
    switch (action.type) {
        default:
            return state;
    }

}