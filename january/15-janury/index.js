// Exportar varibles o constantes
export const coderName = 'Franco';
export const coderAge = 15;

// Exportar funciones

export function showInformation(){
    return `EL coder ${coderName}, tiene ${coderAge} años`
}

export function verifyHire(){
    if(coderAge > 18){
        return `${coderName} contratado`
    } else {
        return `${coderName} no contratado, menor`
    }
}

// Exportar Clases - Objetos

export class Coder{
    constructor(coderName, coderAge){
        this.nombre = coderName,
        this.age = coderAge
    }

    showInfo(){
        return `llamado ${this.nombre}, tiene ${this.age} años`
    }
}

// Instanciar a clase



export default function alias(){
    console.log(`EXPORT DEFAULT`);
}