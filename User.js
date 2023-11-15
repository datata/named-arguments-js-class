class User {
  constructor({ username, email, password}) {
    this.username = username
    this.email = email
    this.password = password
  }
}

const userData = {
  username: "datata", 
  email: "datata@datata.com", 
  password: "12345"
}

// No importa el orden de los parametros, todos tienen definido un nombre
const user = new User(userData)

console.log(user.username);
console.log(user.email);
console.log(user.password);