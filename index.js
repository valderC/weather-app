const express = require('express'); 
const app = express(); 
require('dotenv').config(); 

const dataBase = require('nedb'); 
const mydb = new dataBase('nonSQL.db'); 
mydb.loadDatabase(); 

const port = process.env.PORT || 3000; 

const fetch = require('node-fetch'); 
app.listen(port, () => {
    console.log('connected!')
})

app.use(express.static('public'))


// async function callWeather(){
//     const apiKey = process.env.API_KEY; 
//     const zipCodes = [29301, 29401]; 
//     const urlApi = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCodes[1]},us&appid=${apiKey}`; 
//     const responce = await fetch(urlApi); 
//     const formatedData = await responce.json(); 

//     console.log(`city: ${formatedData.name}`); 
//     console.log(`the humidity is:  ${formatedData.main.humidity}`); 
//     //mydb.insert(formatedData); 
// }

//creating new endpoint for a get requeset
//that will recieve the data from the client 
app.get('/weather/:latlong', async (req, res) => {
    //using the request object in the call back to 
    //retrieve the route parameters passed in from the client 
    const latlong = req.params.latlong.split(','); 
    const lat = latlong[0]; 
    const lon = latlong[1]; 
    const apiKey = process.env.API_KEY; 

    const urlAPi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`; 
    const apiData = await fetch(urlAPi); 
    const formatData = await apiData.json(); 

    console.log(formatData); 
    //responce to the client 
    res.json(formatData); 
})

//callWeather();
