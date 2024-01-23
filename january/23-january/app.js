// try catch

// console.log(3)
// try {

// imprimir()

// } catch (error) {

// }
// console.log(5);

// const url ="http://www.themealdb.com/api/json/v1/1/categorias.php"
// fetch basic then then

// document.addEventListener('DOMContentLoaded', getData);
// function getData(){
//     fetch(url)
//     .then(result=> result.json())
//     .then(datos => console.log(datos.categories))
// }

// fetch con async await

// async function getData() {
//     try {
//         const respose = await fetch(url);
//         const datos = await respose.json()
//         console.log(datos.categories);
//     } catch (error) {
        
//     }

// }
const url= "https://api.spacexdata.com/v3/launches"
const url1= "https://api.spacexdata.com/v3/launches/1"

document.addEventListener('DOMContentLoaded', cargarContent)

async function cargarContent(){
    
    try {
        const respose = await fetch(url);
        const data = await respose.json()
        console.log(data);
        injectingImages(data)        
    } catch (error) {
        
        
    }
    
}
// async function cargarImgs() {
    //     try {
        //         const answer = await fetch(url1);
        //         const image = await answer.json()
        //         injectingImages(image)
        //         console.log(datos);
        //     } catch (error) {
            
            
            // }
            
            // }
            
const content = document.querySelector("#content")


function injectingImages(data){
                

    cleanHTML()

    
    data.forEach(caracteristica => {
        //Con ese acumulador se va guardando lo que va teniendo en cada ciclo
        const {mission_patch} = caracteristica.links
        const {mission_name} = caracteristica
     
        const cardsHtml = document.createElement("div")
        cardsHtml.innerHTML=`
        <div class="cards">
        <img src="${mission_patch}" width="250px">
        <p>${mission_name}</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Ver Info-Mision
        </button>

      

        </div>
        `

        content.appendChild(cardsHtml);
    });


}
function cleanHTML() {
    content.innerHTML = "";
};

// function injectingImages(image){
     

//     const contenido= document.querySelector('#container')

//     let peliculas= image.Search

//     clearHTML()

    
//     peliculas.forEach(caracteristica => {
//         //Con ese acumulador se va guardando lo que va teniendo en cada ciclo
//         const {Poster, Title, Year, Type}=caracteristica
//         contenido.innerHTML+=`
//         <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//         </div>
//         `
//     });


// }