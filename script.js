import { fetchAxios } from "./functions.js";
const API_KEY='8ee633956bad6ae1965b557a94ecfcba';
const dests = [
                {place:'Eilat',lat:'29.55805',lon:'34.94821'},
                {place:'London',lat:'51.509865',lon:'-0.118092'},
                {place:'New York',lat:'40.741775309798804',lon:'-73.8601459078775'},
                {place:'Alaska',lat:'51.9898',lon:'-176.58705'}
];
const baseUrl ='https://api.openweathermap.org/data/2.5/weather';
let options = {
    units:'metric',
    lat:'',
    lon:'',
    q:'',
    appid:API_KEY,
    lang:'he'
}
const createCardDest=(data)=>{
    console.log(data);
    const container = document.querySelector('#all-content');
    const col = document.createElement('div');
    col.classList.add('col-sm-10','col-md-5','col-12','h-25');
    const card = document.createElement('div');
    card.classList.add('card','bg-info','m-3','h-25');
    card.innerHTML=`
    <div class='m-2'>
    <div class='d-flex justify-content-between align-items-center'>
    <div class='w-25'><img class='w-25' src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'}></div>
    <h2 class='w-25'>${data.name}</h2>
    </div>
    <h5 class='d-flex justify-content-end'>${data.weather[0].description}</h5>
    <div class='d-flex justify-content-between align-items-center'>
    <div><h6>טמפ' נמדדת</h6><p>${data.main.temp}°C</p></div>
    <div><h6>טמפ' מורגשת</h6><p>${data.main.feels_like}°C</p></div>
    <div><h6>לחות</h6><p>${data.main.humidity}%</p></div>
    </div>
    </div>
    `
    col.append(card);
    container.append(col)
}
for (let i = 0; i < dests.length; i++) {
    const element = dests[i];
    options.lat = element.lat;
    options.lon = element.lon;
    options.q=element.place;
    fetchAxios(baseUrl,options)
    .then(data=>createCardDest(data))
    .catch(err=>new Error(err));
}