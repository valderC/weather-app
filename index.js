const express = require('express'); 
const app = express(); 
require('dotenv').config(); 

const dataBase = require('nedb'); 
const mydb = new dataBase('nonSQL.db'); 
mydb.loadDatabase(); 

const fetch = require('node-fetch'); 
app.listen(3000, () => {
    console.log('connected my guy 😎')
})

app.use(express.static('public'))


async function callWeather(){
    const apiKey = process.env.API_KEY; 
    const zipCodes = [29301, 29401]; 
    const urlApi = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCodes[1]},us&appid=${apiKey}`; 
    const responce = await fetch(urlApi); 
    const formatedData = await responce.json(); 

    console.log(`city: ${formatedData.name}`); 
    console.log(`Ight my g, it humid af: ${formatedData.main.humidity}`); 
    //mydb.insert(formatedData); 
}

callWeather();
