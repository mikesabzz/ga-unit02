const user = {
    first_name: "Mike",
    last_name: "Sabzevari",
    email: "michaelsabzevari@gmail.com",
    password: "passw@4d",
    register() {
        console.log("registered!")
    },
    login() {
        console.log("logged in!")
    }
}

const createUser = function(first_name, last_name, email, password) {
    return {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        register() {
            console.log("registered!")
        },
        login() {
            console.log("logged in!")
        }
    }
}

const Mike = createUser('mike', 'sabzevari', 'mike@gmail.com', 'passw@4d')
const Elirom = createUser('elirom', 'kalati', 'elirom@gmail.com', 'passw@45d')

console.log(Mike)
console.log(Elirom)




