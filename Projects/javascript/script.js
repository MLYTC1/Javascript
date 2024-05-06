const apiKey = "2bfc1da7fbc4ac5e5725fa8e33d365f9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.error(error);
        showError();
    }
}

function updateUI(data) {
    const weatherIcon = document.querySelector(".weather-icon");
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Wind":
            weatherIcon.src = "images/wind.png"
        case "Snow":
            weatherIcon.src = "images/snow.png"
        case "Humidity":
            weatherIcon.src = "images/humidity.png"
        default:
            weatherIcon.src = "images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

function showError() {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
}


































// const apiKey = "2bfc1da7fbc4ac5e5725fa8e33d365f9";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input")
// const searchBtn = document.querySelector(".search button")
// const weatherIcon  = document.querySelector(".weather-icon img")

// async function checkWeather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();

//     if(response.status == 404){
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//     }else{
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//     if (data.weather[0].main == "Clouds"){
//         weatherIcon.src = "clouds.png";
//     }else if(data.weather[0].main == "Clear"){
//         weatherIcon.src = "clear.png";
//     }
//     else if(data.weather[0].main == "Rain"){
//         weatherIcon.src = "rain.png";
//     }
//     else if(data.weather[0].main == "Drizzle"){
//         weatherIcon.src = "drizzle.png";
//     }
//     else if(data.weather[0].main == "Mist"){
//         weatherIcon.src = "mist.png";
//     }

//     document.querySelector(".weather").style.display = "block";
//     document.querySelector(".error").style.display = "none";
// }

        
    


// }



// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// })
