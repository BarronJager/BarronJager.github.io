function getCurrentWeather(data, zipCode) {
    console.log(data)
    // Check to see if the OpenWeather API returned an error
    if (data.cod == '404' || data.cod == '401' || zipCode.trim() == '') {
        // show the initially hidden div
        weatherContent.style.display = 'block'
        weatherContent.innerHTML = 'Please enter a valid Zip Code'
        return // exit
    }

    let p = document.createElement('p') // create a p element
    let date = new Date(data.dt * 1000)
    let dateStr = date.toLocaleDateString('en-us')
    let timeStr = date.toLocaleTimeString('en-us')

    p.innerHTML = 'City: ' + data.name + '<br><br>' + dateStr + ' - ' + timeStr + '<br>' + 'Sky: ' + data.weather[0].description + '<br>' + 'Temperature: ' + data.main.temp + '<br>' + 'Max Temperature: ' + data.main.temp_max + '<br>' + 'Minimum Temperature: ' + data.main.temp_min + '<br>' + 'Humidity: ' + data.main.humidity + '<br>' + 'Feels Like: ' + data.main.feels_like + '<br>' + 'Wind Speed: ' + data.wind.speed + '<br>' + 'Pressure: ' + data.main.pressure + '<br>' + 'Clouds: ' + data.clouds.all // content for p
    weatherContent.append(p) // add the p to the weatherContent to the DOM
    const icon = document.createElement('img') // create img element for icon
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`) // set the src attribute using the data from the API
    weatherContent.append(icon) // add the icon to the DOM
    weatherContent.style.display = 'block'
}

function getWeatherForecast(data, zipCode) {
    console.log(data)
    // Check to see if the OpenWeather API returned an error
    if (data.cod == '404' || data.cod == '401' || zipCode.trim() == '') {
        // show the initially hidden div
        weatherContent.style.display = 'block'
        weatherContent.innerHTML = 'Please enter a valid Zip Code'
        return // exit
    }

    let p = document.createElement('p') // create a p element
    p.innerHTML = 'City: ' + data.city.name + '<br>'
    weatherContent.append(p)

    for (let index = 0; index < 40; index += 8) { // The five day forcast response gives every 3 hours, so every 8th element is 24 hours later.
        let p = document.createElement('p') // create a p element
        let date = new Date(data.list[index].dt * 1000)
        let dateStr = date.toLocaleDateString('en-us')
        let timeStr = date.toLocaleTimeString('en-us')
        p.innerHTML += dateStr + ' - ' + timeStr + '<br>'
        p.innerHTML += 'Sky: ' + data.list[index].weather[0].description + '<br>' + 'Temperature: ' + data.list[index].main.temp + '<br>' + 'Max Temperature: ' + data.list[index].main.temp_max + '<br>' + 'Minimum Temperature: ' + data.list[index].main.temp_min + '<br>' + 'Humidity: ' + data.list[index].main.humidity + '<br>' + 'Feels Like: ' + data.list[index].main.feels_like + '<br>' + 'Wind Speed: ' + data.list[index].wind.speed + '<br>' + 'Pressure: ' + data.list[index].main.pressure + '<br>' + 'Clouds: ' + data.list[index].clouds.all + '<br>'

        weatherContent.append(p) // add the p to the weatherContent to the DOM
        let icon = document.createElement('img') // create img element for icon
        icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}.png`) // set the src attribute using the data from the API
        weatherContent.append(icon) // add the icon to the DOM
    }

    weatherContent.style.display = 'block'
}

// Declare Variables
const weatherContent = document.querySelector('#weather')
const API_KEY = '8f9cd6c9f00f6970e884eb24cd667a22' // Replace this with your own

document.querySelector('#getWeather').addEventListener('click', function () {
    weatherContent.innerHTML = '' // clear out prior results
    let zipCode = document.querySelector('#zip').value
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${API_KEY}&units=imperial`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Call getWeather function
            getCurrentWeather(data, zipCode)
        }).catch((e) => {
            console.log(`This error occurred: ${e}`)
        })
})

document.querySelector('#getWeather5day').addEventListener('click', function () {
    weatherContent.innerHTML = '' // clear out prior results
    let zipCode = document.querySelector('#zip').value
    let url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},US&appid=${API_KEY}&units=imperial`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Call getWeather function
            getWeatherForecast(data, zipCode)
        }).catch((e) => {
            console.log(`This error occurred: ${e}`)
        })
})