// a reduce takes in two things:

//1. The action (info about what happened)
//2. copy of the current state
const intialUserState = {
    userInfo: {        
        email: "wiec1369@gmail.com",
        firstName: "Adam",
        lastName: "Wieckert",
        password: "adam"
    },
    accessToken: "dkdfYncHDKAMCncks123"
};                                         

function registerReducer(state = intialUserState, action) {
    switch (action.type) {
        case "UPDATE_USER_EMAIL":
            return Object.assign({}, ...state, {userInfo: { email: action.userInfo }});
        default:
            return state;
    }

    return state;
}

export default registerReducer;