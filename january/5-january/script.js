// LocalStorage- setItem('key','value')

localStorage.setItem('company','riwi')
// Guardar objetos de localStorage
const coder = {
    nombre: "David Velez",
    celular: 3023332343
}
// Convertir el objeto en un String - Json.stringfy()
const coderString = JSON.stringify(coder)
console.log(coderString)
console.log(typeof(coderString))
// Guardar en localStorage
localStorage.setItem('coder', coderString)
// Guardar un array en localStorage - (un String en forma de array)
const coders = ['carito', 'viejo eyder', 'viejo jimmy']
const coderStrings = JSON.stringify(coders)
console.log(coderStrings)
console.log(typeof(coderStrings))
localStorage.setItem('coders', coderStrings)
//obtener el localStorage
const company = localStorage.getItem('company')
console.log(company)
// obeter un string con formato de objeto desde el localStorage
const coderObject = localStorage.getItem('coder')
// convertir en su objeto equivalente
console.log(JSON.parse(coderObject))
// Obtener de localStorage un array
const coderArray2 = localStorage.getItem('coders')
//Obtener el string en forma de array
console.log(JSON.parse(coderArray2))

localStorage.removeItem('company')

const array = JSON.parse(localStorage.getItem('coders'))
array.push('viejo Vermen')
localStorage.setItem('coders', array)
console.log(array)