import './style.css';
import {setWeather} from './modules/setDomFncs'


const _init = (()=>{
    const searchBtn = document.getElementById('searchBtn')
    const searchBar = document.getElementById('searchBar')
    const searchError = document.getElementById('searchError')
    const tempBtn = document.getElementById('temp')

    let currentCity = 'los angeles'
    let unit = 'imperial'
    getWeatherData(currentCity,unit)
    async function getWeatherData(location,unit){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=82a38e48f8631a8e1a6702cb6f7b3f81`, {mode: 'cors'})
            if(!response.ok){
                throw new Error("Error Status: " + response.status)
            }
            let weatherData = await response.json()
            setWeather(weatherData,unit)
            currentCity = location
        } catch(err) {
            searchError.classList.add('active')
        }
        searchBar.value=''
    }
    searchBtn.addEventListener('click',()=>{
        getWeatherData(searchBar.value.toLowerCase().replace(' ','%20'),unit)
        searchError.classList.remove('active')
    })
    document.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter'){
            getWeatherData(searchBar.value.toLowerCase().replace(' ','%20'),unit)
            searchError.classList.remove('active')
        }
    })
    tempBtn.addEventListener('click',()=>{
        if(unit=='imperial'){
            unit = 'metric'
        } else {
            unit = 'imperial'
        }
        getWeatherData(currentCity,unit)
    })
})();
