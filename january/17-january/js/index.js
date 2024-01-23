
//1. Fetch API para consumir datos desde un txt...
const loadBtn = document.querySelector('#loadTxt')
loadBtn.addEventListener('click', getData)

function getData(){
    fetch('/january/17-january/data/datos.txt')
    .then(respuesta =>{
        // console.log(respuesta);
        // console.log(respuesta.status);
        // console.log(respuesta.statusText);
        // console.log(respuesta.url);
        return respuesta.text()
    })
    .then(datos =>{
        console.log(datos);
    })
}
//2. Fetch API para consumir un JSON (Objeto)
const loadJson = document.querySelector('#loadJSON')
loadJson.addEventListener('click',getDatos)

function getDatos(){
    fetch('/january/17-january/data/coder.json')
    .then(rta => {
        // console.log(rta);
        return rta.json()
    })
    .then(data => {
        /* console.log(data); */
        showHtml(data)
    })

}
function showHtml({id, nombre, edad, englishLevel}) {
    const contenido = document.querySelector('#contenido')
    contenido.innerHTML= `
    <p> Id : ${id} </p>
    <p> Id : ${nombre} </p>
    <p> Id : ${edad} </p>
    <p> Id : ${englishLevel} </p>

    `
}
// function showHtmls() {
//     const contenido = document.querySelector('#contenido')
    
//     contenido.innerHTML= `
//     <p> Id : ${id} </p>
//     <p> Id : ${nombre} </p>
//     <p> Id : ${edad} </p>
//     <p> Id : ${englishLevel} </p>
//     <p> Id : ${clan} </p>

//     `
// }
//3. Fetch API para consumir datos de un JSON (Array)
const jsonArray = document.querySelector('#loadJSONArray')
jsonArray.addEventListener('click',getsDatos)

function getsDatos() {
    fetch('/january/17-january/data/coders.json')
    .then(arreglo =>{
        return arreglo.json();
    })

    .then(dataA => {
        /* console.log(data); */
        showHtmlArreglo(dataA)
    })
}
function showHtmlArreglo(objeto) {
    const contenido = document.querySelector('#contenido')
    objeto.forEach(coder => {
        const {id,nombre,edad,englishLevel} = coder
        contenido.innerHTML+= `
        <p> Id : ${id} </p>
        <p> Id : ${nombre} </p>
        <p> Id : ${edad} </p>
        <p> Id : ${englishLevel} </p>
    
        `
    });
}

//4.  FetchAPI para consumir recursos desde una API PUBLICA (internet)
const loadApi = document.querySelector('#loadAPI')
loadApi.addEventListener('click', cargarApi)

function cargarApi() {
    fetch('https://picsum.photos/v2/list')
    .then(rtaPicsum =>{
        // console.log(rtaPicsum);
        return rtaPicsum.json()
    })
    .then(dataPic => {
        console.log(dataPic);
        injectingImages(dataPic)
    })
}
function injectingImages(images){
    const contenido = document.querySelector('#contenido')
    images.forEach(img => {
        const {id,author,download_url} = img
        contenido.innerHTML+= `
        <img src="${download_url}" width = "200px"> 
        <p> Autor : ${author} </p>
        `
    });
}