

document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp()
{
    const apiKeyPublic = '153a587185c5aad73f9acecd5aa5ee7a'
    const apiKeyPrivate = '35a65029c8e5f22742dda3c4cc9744a8aa050569'

    const url=`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKeyPublic}`;
    fetch(url)
        .then(resultado=>{
            return resultado.json();
        })
        .then(datos=>{
            const{data: {results}} = datos;
            console.log(results);
            mostrarHtml(results);
        })
        .catch(err=>{
            console.log(err);
        });
       
}


function mostrarHtml(resultados)
{

    const res = document.querySelector('#resultados');
    resultados.forEach(element => {
        console.log(element);
        const {thumbnail:{path, extension}, name} = element;
        
        const urlImg = `${path}.${extension}`;
        
        const h1 = document.createElement('h1');
        h1.textContent = name;

        const img = document.createElement('img');
        img.src=urlImg;

        const div = document.createElement('div');

        div.appendChild(h1);
        div.appendChild(img);

        res.appendChild(div);
    });
    

    
}