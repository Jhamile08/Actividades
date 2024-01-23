    const inicial= document.querySelector('#container')

    document.addEventListener('DOMContentLoaded',()=>{
        cargarInicial()
      })
    
    
    
    function cargarInicial(){


        fetch(`https://www.omdbapi.com/?apikey=265d7fd1&s=toy`)
        .then(answer=>{
        
            //console.log((answer));
            return answer.json()
        
        })
        .then(image=>{
        
                      
        
            injectingImages(image)

        })

       
    }

    
    
    
    const buscador = document.querySelector("#buscador")
    buscador.addEventListener('input', cargarImgs)

    function cargarImgs() {
        const searchTerm = buscador.value;
        


        fetch(`https://www.omdbapi.com/?apikey=265d7fd1&s=${searchTerm}`)
        .then(answer=>{
        
            /* console.log((answer)); */
            return answer.json()
        
        })
        .then(image=>{
        
            // console.log(image);
        
            injectingImages(image)

        })

        

    }

    function injectingImages(image){
     

        const contenido= document.querySelector('#container')

        let peliculas= image.Search

        clearHTML()

        
        peliculas.forEach(caracteristica => {
            //Con ese acumulador se va guardando lo que va teniendo en cada ciclo
            const {Poster, Title, Year, Type}=caracteristica
            contenido.innerHTML+=`
            <div class="cards">
            <img src="${Poster}" width="250px">
            <p class="textos"> ${Title}</p>
            <p class="textos"> ${Year}</p>
            <button class="buttonType">${Type}</button>
            </div>`
        });

    
    }

    function clearHTML(){
        const contenido= document.querySelector('#container')
        contenido.innerHTML=""

    }