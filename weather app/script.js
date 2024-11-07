const search = document.querySelector("#searchbox")
const button = document.querySelector("#button")
const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const icon = document.querySelector(".Weather-icon")
const BG = document.getElementById("BG")
async function GetWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  console.log(response)
  if (response.status == 404) {
    document.querySelector("#info").style.display = "none";
    document.querySelector(".error").style.display = "block";
    BG.style.minHeight = "20vh"
  }
  else {
    BG.style.minHeight = "65vh"
    var data = await response.json()
    document.querySelector(".error").style.display = "none";
    document.querySelector("#info").style.display = "block";
    console.log(data)
    document.querySelector(".Weather-icon").src = `assets/${data.weather[0].main}.png`
    document.querySelector(".Temperature").innerHTML = `${data.main.temp} &deg;C`
    document.querySelector(".city").innerHTML = `${data.name}`
    document.querySelector(".wind").innerHTML = `: ${data.wind.speed} km/hr`
    document.querySelector(".humid").innerHTML = `: ${data.main.humidity} %`
  }
}
button.addEventListener("click", () => {
  GetWeather(search.value)
})
search.addEventListener("keydown",((event)=>{
  if (event.key === 'Enter') {
    GetWeather(search.value)
  }
}))