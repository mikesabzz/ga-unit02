class User {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }
    login() {
        console.log(`Logged ${this.name}`)
    }
    register() {
        console.log(`Register ${this.email}`)
    }
}
const justin = new User('Justin Len', 'justin@email.com', 'pass@4') 
console.log(justin)