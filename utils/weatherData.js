const request = require('request')


const openWeatherMap = {
    BASE_URL :"https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY: process.env.SECRET_KEY
}

const weatherData = function (address,callback){

    const url = `${openWeatherMap.BASE_URL}${address}&appid=${openWeatherMap.SECRET_KEY}`


    request({url, json: true}, (error, data) => {

        if(error){

            callback(true,'Unable to connect to the weather service'+ error)
        }

        callback(false,data?.body)

        
    })

}


module.exports = weatherData

