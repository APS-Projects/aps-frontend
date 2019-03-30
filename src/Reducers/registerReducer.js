// a reduce takes in two things:

//1. The action (info about what happened)
//2. copy of the current state
const intialUserState = {
    userInfo: {        
        email: "wiec1369@gmail.com",
        firstName: "",
        lastName: "",
        password: ""
    },
    accessToken: ""
};                                          

function registerReducer(state = intialUserState, action) {
    return state;
}

export default registerReducer;