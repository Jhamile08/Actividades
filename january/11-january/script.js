class Coder  {
  
    constructor(nombre,nota){
        this.nombre = nombre,
        this.nota = nota
    }
    showCoder(){
        return `El coder ${this.nombre}, obtuvo la nota de: ${this.nota}`
    }

    static message(){
        return `The coders of riwi are the best developers in antioquia and the entire world`
    }
}
const tomas = new Coder()
console.log(tomas);
console.log(tomas.showCoder());
console.log(Coder.message());

class Pasante extends Coder{
    constructor(nombre,nota, telefono){
        super(nombre,nota)
        this.telefono = telefono
    }
    showPasante(){
        return `El pasante ${this.nombre}, y su telefono es: ${this.telefono}`
    }
}
const tabares = new Pasante('Miguel Tabares', 4.8)
console.log(tabares.showCoder())


class Customer{
    nombre;

    setNombre(nombre){
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }
}
const caro = new Customer();
// setter
caro.setNombre('Caro');
console.log(caro.getNombre());