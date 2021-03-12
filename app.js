const arrow = document.querySelector('.arrow-up');
const main = document.querySelector('.wrapper');
const main2 = document.querySelector('.wrapper-keycode-view');
const back = document.querySelector('.back');
const headerTime = document.querySelector('.header-time');
const backImg = document.querySelector('.background-img');
const bigTime = document.querySelector('.big-time');
const dayAndDate = document.querySelector('.date-day');
const weatherTemp = document.querySelector('.weather-temp');
const cityId = 1283240;

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
})

const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    //let s = date.getSeconds();
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        // h = h-12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    //s = (s < 10) ? "0" + s : s;

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
    let month = date.getMonth() + 1;
    let day = date.getDay() + 1;
    let monthDate = date.getDate();
    let monthName;
    let dayName;

    switch(month){
        case 1:
            monthName = "January"
        break;
        case 2:
            monthName = "Feburary"
        break;
        case 3:
            monthName = "March"
        break;
        case 4:
            monthName = "April"
        break;
        case 5:
            monthName = "May"
        break;
        case 6:
            monthName = "June"
        break;
        case 7:
            monthName = "July"
        break;
        case 8:
            monthName = "August"
        break;
        case 9:
            monthName = "September"
        break;
        case 10:
            monthName = "October"
        break;
        case 11:
            monthName = "November"
        break;
        case 12:
            monthName = "December"
        break;

    }

    switch(day){
        case 1:
            dayName = "Sunday";
        break;
        case 2:
            dayName = "Monday";
        break;
        case 3:
            dayName = "Tuesday";
        break;
        case 4:
            dayName = "Wednesday";
        break;
        case 5:
            dayName = "Thursday";
        break;
        case 6:
            dayName = "Friday";
        break;
        case 7:
            dayName = "Saturday";
        break;
    }

    let today = dayName+", "+monthName+" "+monthDate;
    dayAndDate.innerText = today;
    dayAndDate.textContent = today;
}
showDayDate();

const getWeather = (cityId) =>{
    let key = '711853fd05f7c73fb2814b216909f272';
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`;
    console.log(url);
    fetch(url) 
        .then((resp)=>{
            return resp.json();
        })
        .then(data=>{
            console.log(data);
            displayWeather(data);
            //object destructering i guess??
            // const { main,weather } = data;
            // let celcious = `${Math.round(main.temp)}<sup>°</sup>C`;
            // //console.log(celcious);
            // let desc = `${weather[0]["description"]}`;
            // let temp = `${celcious}`;
            // weatherTemp.innerHTML(temp);
            // weatherTemp.textContent(temp);
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
