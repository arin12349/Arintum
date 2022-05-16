const WEATHER_APIKEY = "e7d7d0cf82cb14bf5acb564c59f4b5ab";

function success({ coords, timestamp }) {
  const latitude = coords.latitude; // 위도
  const longitude = coords.longitude; // 경도
  // alert(`위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`);
  getWeather(latitude, longitude);
  findLocation(latitude,longitude);
}
function getUserLocation() {
  if (!navigator.geolocation) {
    console.log("cannot find location");
  }
  navigator.geolocation.watchPosition(success);
}
function getWeather(latitude, longitude) {
  if (latitude != null || longitude != null) {
    const weatherUrl =
      `https://api.openweathermap.org/data/2.5/weather?` +
      `lat=${latitude}&` + //위도
      `lon=${longitude}&` + //경도
      `appid=${WEATHER_APIKEY}`; //apikey
    // console.log(weatherUrl);
    $.ajax({
      type: "GET",
      url: weatherUrl,
      success: function (data) {
        makeWeather(data);
      },
      error: function (xhr, status, error) {
        // console.log("cannot read weather");
      },
    });
  }
}

function makeWeather(res) {
  if (res != null) {
    let icon = res.weather[0].icon;
    // let iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    // const img = document.querySelector(".icon");
    // img.src = iconUrl;

    const wi = document.querySelector(".wi");
    icon = icon.slice(0, 2);
    wi.classList.add(iconMapping(icon));

    document.querySelector(".temp").textContent =
      Math.floor(res.main.temp - 273)+" °C";
  }
}

function iconMapping(icon) {
  let tmp = "";
  switch (icon) {
    case "01":
      tmp = "wi-day-sunny";
      break;
    case "02":
      tmp = "wi-day-cloud";
      break;
    case "03":
      tmp = "wi-day-cloudy-windy";
      break;
    case "04":
      tmp = "wi-day-cloudy-gusts";
      break;
    case "09":
      tmp = "wi-day-hail";
      break;
    case "10":
      tmp = "wi-day-rain";
      break;
    case "11":
      tmp = "wi-day-lightning";
      break;
    case "13":
      tmp = "wi-day-snow";
      break;
    case "50":
      tmp = "wi-day-haze";
      break;
  }
  return tmp;
}
function init() {
  getUserLocation();
}
window.addEventListener("load", init);
