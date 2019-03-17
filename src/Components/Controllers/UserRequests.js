const url = 'http://localhost:5000'

class UserRequests {

    registerUser = (email, firstName, lastName, password) => {
        return fetch(`${url}/api/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Username: email,
                Password: password,
                FirstName: firstName,
                LastName: lastName
            })
        }).then(response => response.text())
    }

    userLogIn = (username, password) => {
        return fetch(`${url}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Username: username,
                Password: password
            })
        }).then(response => response.text())
    }

    userDetails = (token) => {
        return fetch(`${url}/api/user`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem("loginToken")}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }


}

const userRequests = new UserRequests()
export default userRequests