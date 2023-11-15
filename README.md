### Named arguments

En JavaScript, no hay una característica específica llamada "named arguments" (argumentos con nombre) como en algunos otros lenguajes de programación, como Python.  
En JavaScript, los argumentos de una función se pasan por posición, es decir, el orden en el que se proporcionan los argumentos en la llamada a la función es lo que determina a qué parámetro corresponden.

Sin embargo, podemos lograr algo similar a través de objetos o destructuración de objetos. Por ejemplo:

```javascript
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
```

En este ejemplo, el constructor de la clase User toma un objeto como argumento, y los campos de la clase se asignan a las propiedades del objeto. Esto permite pasar argumentos con nombre cuando creas una instancia de la clase.

Debemos tener en cuenata que no es lo mismo que tener argumentos con nombre en el sentido estricto que se encuentra en algunos otros lenguajes. Estás pasando un objeto que tiene propiedades con nombres específicos, pero internamente estás trabajando con las propiedades del objeto, no con argumentos de función individuales con nombres.