const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const weatherContainer = document.querySelector(".weather_container");
const grantLocationContainer = document.querySelector(
  ".grant_location_container"
);
const grantAccess = document.querySelector("[data-grantAccess]");
const searchForm = document.querySelector("[data-searchForm]");
const searchInput = document.querySelector("[data-searchInput]");
const loadingScreen = document.querySelector(".loading_container");
const userInfoContainer = document.querySelector(".userInfo_container");
const errorContainer = document.querySelector(".error_container");

let currTab = userTab;
const API_KEY = "f355f2e496d84a5aee68bdce588c5bf9";
currTab.classList.add("current_tab");
getfromSessionStorage();

function switchTab(clickedTab) {
  if (clickedTab != currTab) {
    currTab.classList.remove("current_tab");
    currTab = clickedTab;
    clickedTab.classList.add("current_tab");

    if (!searchForm.classList.contains("active")) {
      userInfoContainer.classList.remove("active");
      grantLocationContainer.classList.remove("active");
      searchForm.classList.add("active");
    } else {
      searchForm.classList.remove("active");
      userInfoContainer.classList.remove("active");

      getfromSessionStorage();
    }
  }
}

userTab.addEventListener("click", () => {
  switchTab(userTab);
});

searchTab.addEventListener("click", () => {
  switchTab(searchTab);
});

function getfromSessionStorage() {
  const localCoordinates = sessionStorage.getItem("userCoordinates");

  if (!localCoordinates) {
    grantLocationContainer.classList.add("active");
  } else {
    const coordinates = JSON.parse(localCoordinates);
    fetchUserWeatherInfo(coordinates);
  }
}

async function fetchUserWeatherInfo(coordinates) {
  const { lat, lon } = coordinates;

  grantLocationContainer.classList.remove("active");
  loadingScreen.classList.add("active");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    loadingScreen.classList.remove("active");

    renderWeatherInfo(data);
    userInfoContainer.classList.add("active");
  } catch (error) {
    loadingScreen.classList.remove("active");
    console.log(error);
  }
}

function renderWeatherInfo(data) {
  const cityName = document.querySelector("[data-cityName]");
  const countryIcon = document.querySelector("[data-countryIcon]");
  const weatherDisc = document.querySelector("[data-weatherDisc]");
  const weatherIcon = document.querySelector("[data-weatherIcon]");
  const temp = document.querySelector("[data-temp]");
  const windspeed = document.querySelector("[data-windspeed]");
  const humidity = document.querySelector("[data-humidity]");
  const cloudiness = document.querySelector("[data-cloudiness]");

  cityName.innerText = data?.name;
  countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
  weatherDisc.innerText = data?.weather[0]?.description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`;
  temp.innerText = data?.main?.temp + " °C";
  windspeed.innerText = data?.wind?.speed + " m/s";
  humidity.innerText = data?.main?.humidity + "%";
  cloudiness.innerText = data?.clouds?.all + "%";
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("No geolocation support available!");
  }
}

function showPosition(position) {
  const userCoordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  };

  sessionStorage.setItem("userCoordinates", JSON.stringify(userCoordinates));
  fetchUserWeatherInfo(userCoordinates);
}

grantAccess.addEventListener("click", getLocation);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let cityName = searchInput.value;

  if (!cityName) return;
  else fetchSearchWeatherInfo(cityName);
});

async function fetchSearchWeatherInfo(city) {
  loadingScreen.classList.add("active");
  userInfoContainer.classList.remove("active");
  grantLocationContainer.classList.remove("active");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    loadingScreen.classList.remove("active");

    renderWeatherInfo(data);
    errorContainer.classList.remove("active");
    userInfoContainer.classList.add("active");
  } catch (error) {
    loadingScreen.classList.remove("active");
    errorContainer.classList.add("active");
    console.log(error);
  }
}
