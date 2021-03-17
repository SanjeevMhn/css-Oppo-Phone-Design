const arrow = document.querySelector('.arrow-up');
const main = document.querySelector('.wrapper');
const main2 = document.querySelector('.wrapper-keycode-view');
const back = document.querySelector('.back');
const headerTime = document.querySelector('.header-time');
const backImg = document.querySelector('.background-img');
const bigTime = document.querySelector('.big-time');
const dayAndDate = document.querySelector('.date-day');
const weatherTemp = document.querySelector('.weather-temp');
const numInput = document.querySelectorAll('.input-num');
const homePage = document.querySelector('.wrapper-homepage-view');
const musicAppIcon = document.querySelector('.app-icon-music');
const musicApp = document.querySelector('.music-display');
const jokesAppIcon = document.querySelector('.app-icon-jokes');
const jokesApp = document.querySelector('.jokes-display');
const homeButton = document.querySelector('.home');
const process = [musicApp,jokesApp];
const cityId = 1283154;


arrow.addEventListener('click',function(){
    main.style.top = -32 + 'rem';
    main2.style.top = 3.5 + 'rem';
    headerTime.style.visibility = "visible";
    backImg.style.filter = "blur(5px)";
});

back.addEventListener('click',function(){
    main2.style.top = 32 + 'rem';
    main.style.visibility = "visible";
    main.style.top = 0 + 'rem';
    backImg.style.filter = "blur(0px)";
    headerTime.style.visibility = "hidden";
});

numInput.forEach((num)=>{
    num.addEventListener('click', ()=>{
        homePage.style.top = 3.5 + "rem";
        headerTime.style.visibility = "visible"; 
        main2.style.visibility = "hidden";
    })
});

musicAppIcon.addEventListener('click',()=>{
    musicApp.style.display = "flex";
});

jokesAppIcon.addEventListener('click',()=>{
    jokesApp.style.display = "flex";

});

homeButton.addEventListener('click', ()=>{
    process.forEach((pro)=>{
        if((pro.style.display) == "flex"){
            pro.style.display = "none";
            
        }
    })
})
const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let session = "AM";
    
    h == 0 ? 12:0;
    // if(h == 0){
    //     h = 12;
    // }
    h > 12 ? session = "PM" : session = "AM";
    // if(h > 12){
    //     session = "PM";
    // }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    let time = h + ":" + m;

    bigTime.innerText = time;
    bigTime.textContent = time;

    headerTime.innerText = time + session;
    headerTime.textContent = time +" "+ session;

    setTimeout(showTime, 1000);
}
showTime();

const showDayDate = () => {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDay();
    let monthDate = date.getDate();
    let months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   
    let monthName = months[month];
    let dayName = days[day];
    let today = dayName+", "+monthName+" "+monthDate;
   
    dayAndDate.innerText = today;
    dayAndDate.textContent = today;
}
showDayDate();

const getWeather = (cityId) =>{
    let key = '711853fd05f7c73fb2814b216909f272';
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`;
//    console.log(url);
    fetch(url) 
        .then((resp)=>{
            return resp.json();
        })
        .then(data=>{
    //        console.log(data);
            displayWeather(data);
        })  
        .catch(function(){
            console.log("Help")
        });
}
getWeather(cityId);

function displayWeather(data) {
    let celcius = Math.round(parseFloat(data.main.temp)-273.15);
        
    let weatherToday = celcius + '<sup>°</sup>C';
    let desc = capitalizeFirstLetter(data.weather[0].description);
    weatherTemp.innerHTML = `${desc} ${weatherToday}`;
}
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
}

const getJokes = () => {
    let url = 'https://official-joke-api.appspot.com/jokes/programming/ten';
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(joke => {
            const {setup, punchline} = joke;
            const display = document.querySelector('.jokes-result');

            let setu = document.createElement('DIV');
            setu.classList.add('jokes-setup');
            setu.innerText = setup;

            let punch = document.createElement('DIV');
            punch.classList.add('jokes-punchline');
            punch.innerText = punchline;

            let bundleJoke = document.createElement('DIV');
            bundleJoke.classList.add('jokes-info');
            bundleJoke.append(setu,punch);

            display.appendChild(bundleJoke);
        })
    })
}
getJokes();

const getFootball = () =>{
    let url = 'https://www.scorebat.com/video-api/v1/';
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(da => {
            const {title, embed}
        })
    })
    .catch(err =>{
        console.error(err)
    })
}

getFootball();