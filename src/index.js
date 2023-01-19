import './style.css'



const img = document.querySelector('img');
const searchBtn = document.getElementById('searchBtn')
const searchBar = document.getElementById('searchBar')
    
async function generatePic(phrase){
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=s4b1EsL8gZgkYyIQLkX1a1IpGqKy1XmN&s=${phrase}`, {mode: 'cors'})
    const imgData = await response.json()
    img.src = imgData.data.images.original.url;
}

searchBtn.addEventListener('click',()=>{
    generatePic(searchBar.value).catch(function(){
        generatePic('cats')
    });
})