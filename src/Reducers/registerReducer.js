// a reduce takes in two things:

//1. The action (info about what happened)
//2. copy of the current state
const intialUserState = {
    userInfo: {        
        email: "wiec1369@gmail.com",
        firstName: "Adam",
        lastName: "Wieckert",
        password: "adam",
        accessToken: "dkdfYncHDKAMCncks123"
    }
};

function updateEmailReducer(state, action) {
    switch(action.type) {
        case "UPDATE_USER_EMAIL":
            return action.userEmail;
        default:
            return state;    
    }
}

function registerReducer(state = intialUserState, action) {
    switch (action.type) {
        case "UPDATE_USER_EMAIL":
            return Object.assign({}, ...state, { email: updateEmailReducer(state.userInfo.email, action)});
        default:
            return state;
    }
}

export default registerReducer;