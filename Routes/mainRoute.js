const router = require('express')();
const weatherData = require('../utils/weatherData.js')




router.get('/', (req, res) => {
    
    res.render('home')
})



router.get('/weather', (req, res) => {


    weatherData(req.query.address, (error, data) => {

        if(error){
            console.log("if",error);
            
          return res.render('errorNotFound')

        }else
        {
            console.log("elsse",data);


         

            if(!data){
                return res.render('errorNotFound')
            }

            const {weather,main,name,cod} = data
            
            const temp = Math.floor(main?.temp - 273.15);
            const tempMin = Math.floor(main?.temp_min - 273.15);
            const tempMax = Math.floor(main?.temp_max - 273.15);
            const description = weather[0].description
    
    
    
    
            res.render('home',{
                name,  
                temp,
                tempMin,
                tempMax,
                description
            })
        }

    
       


    })


   
})

router.get('*', (req, res) => {

    res.render('errorNotFound')
    
})


module.exports =  router
