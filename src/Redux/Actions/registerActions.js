export function updateEmail(userEmail) {
    return {
        type: 'UPDATE_USER_EMAIL',
        userEmail
    }
};

export function updateFirstName(firstName) {
    return {
        type: 'UPDATE_FIRSTNAME',
        firstName
    }
};

export function updateLastName(lastName) {
    return {
        type: 'UPDATE_LASTNAME',
        lastName
    }
};

export function updatePassword(password) {
    return {
        type: 'UPDATE_PASSWORD',
        password
    }
};