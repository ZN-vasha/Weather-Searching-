const API_key = `c890bd115bf9a90364c25cc2694e5d4c`;
const searchTemperature = () => {
  const city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const setInnerText = (id, Text) => {
  document.getElementById(id).innerText = Text;
};
const displayTemperature = (temperature) => {
  // console.log(temperature);
  setInnerText("city-name", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("weather-condition", temperature.weather[0].main);
  // set Icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
