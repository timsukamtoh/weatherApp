import './style.css';
import {getMph,getTempC,getTempF} from './modules/calculateItems';

const searchBtn = document.getElementById('searchBtn')
const searchBar = document.getElementById('searchBar')
const searchForm = document.getElementById('searchForm')
    
async function generatePic(phrase){
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=s4b1EsL8gZgkYyIQLkX1a1IpGqKy1XmN&s=${phrase}`, {mode: 'cors'})
    const imgData = await response.json()
    img.src = imgData.data.images.original.url;
        
}
function getForecast(data){
    let forecast = data.weather[0].main.toLowerCase()
    if(forecast.includes('cloud')){
        return 'Cloudy'
    }
    if(forecast.icludes('rain')){
        return 'Rainy'
    }
    return 'Clear'
}
function iconURL(forecast){
    if(forecast == 'Cloudy') return '../src/icons/cloud.png'
    if(forecast == 'Rainy') return '../src/icons/rainy-day.png'
    return '../src/icons/clear-sky.png'
}

function setWeather(weatherData){
    const location = document.getElementById('location')
    const forecast = document.getElementById('forecast')
    const weatherIcon = document.getElementById('weatherIcon')
    const temp = document.getElementById('temp')
    const feelsLike = document.getElementById('feelsLike')
    const wind = document.getElementById('wind')
    const humidity = document.getElementById('humidity')

    location.textContent = weatherData.name
    forecast.textContent = getForecast(weatherData)
    weatherIcon.src = iconURL(getForecast(weatherData))
    temp.textContent = getTempF(weatherData.main.temp)
    feelsLike.textContent = 'Feels Like: '+ getTempF(weatherData.main.feels_like)
    wind.textContent = 'Wind: '+ getMph(weatherData.wind.speed)
    humidity.textContent = 'Humidity: '+ weatherData.main.humidity +'%'

}
async function getWeatherData(location){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&APPID=82a38e48f8631a8e1a6702cb6f7b3f81`, {mode: 'cors'})
        console.log(response)
        let weatherData = await response.json()
        setWeather(weatherData)
    } catch(err) {
        console.log(err)
        alert(err)
    }
    
}
searchBtn.addEventListener('click',()=>{
    // generatePic(searchBar.value).catch(function(){
    //     generatePic('cats')
    // });
    // searchBar.value.toLowerCase().replace(' ','%20')
    console.log('click')
    getWeatherData('London')
})