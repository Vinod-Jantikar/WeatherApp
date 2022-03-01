let api_key = "8b8f27e0a7062943de4d13acff7c42f9"

async function fetchData() {

    try {
        let input = document.getElementById("search_something").value;


        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api_key}`);

        let data = await response.json();

        document.getElementById("cityName").style.color = "#F4511E"
        document.getElementById("cityName").innerText = input


        document.getElementById("tempValue").innerText = data.main.temp;
        document.getElementById("tempValue").style.color = "#F4511E"

        document.getElementById("des").innerText = data.weather[0].description
        document.getElementById("des").style.color = "#F4511E"

        document.getElementById("humid").innerText = data.main.humidity
        document.getElementById("humid").style.color = "#F4511E"

        document.getElementById("windspeed").innerText = data.wind.speed;
        document.getElementById("windspeed").style.color = "#F4511E"
    } catch (err) {
        console.log(error)
    }

}

