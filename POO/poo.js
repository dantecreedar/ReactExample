function Persona(nombre, edad, apellido, completo) {
    this.nombre = nombre;
    this.edad = edad;
    this.apellido = apellido;
    this.completo = function () {
        return console.log(`mi nombre es ${nombre} mi edad es ${edad} y mi apellido es ${apellido}`
        )
    }
}

const userId_1  = new Persona("josefina", 45, "gonzales");
const userId_2  = new Persona("jose", 45, "gonzales");
const userId_3  = new Persona("mariano", 45, "gonzales");

userId_1.completo()
userId_2.completo()
userId_3.completo()