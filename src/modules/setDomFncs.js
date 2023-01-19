import {getMph,getKph,getTempF,getTempC} from './calculateMetrics';
function getForecast(data){
    let forecast = data.weather[0].main.toLowerCase()
    if(forecast.includes('cloud')){
        return 'Cloudy'
    }
    if(forecast.includes('rain')){
        return 'Rainy'
    }
    return 'Clear'
}
function iconURL(forecast){
    if(forecast == 'Cloudy') return '../src/icons/cloud.png'
    if(forecast == 'Rainy') return '../src/icons/rainy-day.png'
    return '../src/icons/clear-sky.png'
}
function setWeather(weatherData,unit){
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
    humidity.textContent = 'Humidity: '+ weatherData.main.humidity +'%'
    if(unit=='imperial'){
        temp.textContent = getTempF(weatherData.main.temp)
        feelsLike.textContent = 'Feels Like: '+ getTempF(weatherData.main.feels_like)
        wind.textContent = 'Wind: '+ getMph(weatherData.wind.speed)
    } else {
        temp.textContent = getTempC(weatherData.main.temp)
        feelsLike.textContent = 'Feels Like: '+ getTempC(weatherData.main.feels_like)
        wind.textContent = 'Wind: '+ getKph(weatherData.wind.speed)
    }
}
export {
    getForecast,
    iconURL,
    setWeather
}