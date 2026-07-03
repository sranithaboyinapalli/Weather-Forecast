const APIKEY = "54425248c7f1e150a19227805ae72b12";
 const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const searchbox = document.getElementById("city");
 const  searchbtn = document.getElementById("btn");

 async function checkweather(city = 'Tunisia') {

  const res = await fetch(URL + city + `&appid=${APIKEY}`);
    let data = await res.json();
     if (data.cod == "404") {
        alert("City not found");
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
    data.wind.speed + " Km/h";
 }

 searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
 })
 searchbox.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        checkweather(searchbox.value);
    }
 })
 checkweather();