const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c13c4e0419msh07ba7e174f3f2b0p1248e4jsn660bf5bddffa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) =>{

    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())

	.then((response) => {
        
        console.log(response)
    
        // cloud_pct.innerHTML  = response.cloud_pct 
        temp.innerHTML  = response.temp 
        temp2.innerHTML  = response.temp 

        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML  = response.min_temp 
        max_temp.innerHTML  = response.max_temp 
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML  = response.sunrise 
        sunset.innerHTML  = response.sunset 
         
    })

	.catch(err => console.error(err));

}


submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)

})

getWeather("Kolkata")




// others -->delhi
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
.then(response => response.json())

.then((response) => {
    
    console.log(response)

    // cloud_pct.innerHTML  = response.cloud_pct 
    temp_delhi.innerHTML  = response.temp 
    feels_like_delhi.innerHTML = response.feels_like
    humidity_delhi.innerHTML = response.humidity
    min_temp_delhi.innerHTML  = response.min_temp 
    max_temp_delhi.innerHTML  = response.max_temp 
    wind_speed_delhi.innerHTML = response.wind_speed
    wind_degrees_delhi.innerHTML = response.wind_degrees
    sunrise_delhi.innerHTML  = response.sunrise 
    sunset_delhi.innerHTML  = response.sunset 
     
})
.catch(err => console.error(err));




// others -->mumbai
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
.then(response => response.json())

.then((response) => {
    
    console.log(response)

    // cloud_pct.innerHTML  = response.cloud_pct 
    temp_mumbai.innerHTML  = response.temp 
    feels_like_mumbai.innerHTML = response.feels_like
    humidity_mumbai.innerHTML = response.humidity
    min_temp_mumbai.innerHTML  = response.min_temp 
    max_temp_mumbai.innerHTML  = response.max_temp 
    wind_speed_mumbai.innerHTML = response.wind_speed
    wind_degrees_mumbai.innerHTML = response.wind_degrees
    sunrise_mumbai.innerHTML  = response.sunrise 
    sunset_mumbai.innerHTML  = response.sunset 
     
})
.catch(err => console.error(err));




// others -->delhi
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
.then(response => response.json())

.then((response) => {
    
    console.log(response)

    // cloud_pct.innerHTML  = response.cloud_pct 
    temp_chennai.innerHTML  = response.temp 
    feels_like_chennai.innerHTML = response.feels_like
    humidity_chennai.innerHTML = response.humidity
    min_temp_chennai.innerHTML  = response.min_temp 
    max_temp_chennai.innerHTML  = response.max_temp 
    wind_speed_chennai.innerHTML = response.wind_speed
    wind_degrees_chennai.innerHTML = response.wind_degrees
    sunrise_chennai.innerHTML  = response.sunrise 
    sunset_chennai.innerHTML  = response.sunset 
     
})
.catch(err => console.error(err));


// others -->delhi
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
.then(response => response.json())

.then((response) => {
    
    console.log(response)

    // cloud_pct.innerHTML  = response.cloud_pct 
    temp_london.innerHTML  = response.temp 
    feels_like_london.innerHTML = response.feels_like
    humidity_london.innerHTML = response.humidity
    min_temp_london.innerHTML  = response.min_temp 
    max_temp_london.innerHTML  = response.max_temp 
    wind_speed_london.innerHTML = response.wind_speed
    wind_degrees_london.innerHTML = response.wind_degrees
    sunrise_london.innerHTML  = response.sunrise 
    sunset_london.innerHTML  = response.sunset 
     
})
.catch(err => console.error(err));


