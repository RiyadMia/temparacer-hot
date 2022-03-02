const API_KEY = `641a2d669cb140b97de82ef9c9eaaa8d`
const temparacerHot = () => {
    const city = document.getElementById('cityName').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayHot(data))
}
const setTimeText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayHot = temperature => {
    setTimeText('city', temperature.name)
    setTimeText('temperature', temperature.main.temp)
    setTimeText('condition', temperature.weather[0].main);
    console.log(temperature)
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].
        icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}