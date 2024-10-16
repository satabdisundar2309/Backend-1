const date = document.querySelector(".date");
const tempereture = document.querySelector(".tempereture");
const logo = document.querySelector(".logo");
const input = document.getElementById("submitF");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");


const getData = async (city) => {
  try {
    
    const dAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7c825baf26f2f6a67108fb4adfd073e2`;
    const response = await fetch(dAPI);
    const data = await response.json();
    console.log(data);
    if(data.cod=== '404'){
        city_name.innerText = 'No such city found'
    }
    else{
        city_name.innerText = `${data.name}, ${data.sys.country}`;
        tempereture.innerText = data.main.temp;
        logo.innerText=data.weather[0].main;
    }
  } catch (error) {
    console.log("No such city found...", error);
  }
};
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Enter a city name");
  } else {
    console.log(input.value)
    getData(input.value);
  }
});

getData('Bhubaneswar')
