const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9b53ae0dbmsh5d4f397801f7f6ap15290bjsn09e2f8a8e5ad',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed1.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed

    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)
});

getWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        mumbai_cloud_pct.innerHTML = response.cloud_pct
        mumbai_feels_like.innerHTML = response.feels_like
        mumbai_humidity.innerHTML = response.humidity
        mumbai_max_temp.innerHTML = response.max_temp
        mumbai_min_temp.innerHTML = response.min_temp
        mumbai_temp.innerHTML = response.temp
        mumbai_wind_degrees.innerHTML = response.wind_degrees
        mumbai_wind_speed.innerHTML = response.wind_speed

    })
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        pune_cloud_pct.innerHTML = response.cloud_pct
        pune_feels_like.innerHTML = response.feels_like
        pune_humidity.innerHTML = response.humidity
        pune_max_temp.innerHTML = response.max_temp
        pune_min_temp.innerHTML = response.min_temp
        pune_temp.innerHTML = response.temp
        pune_wind_degrees.innerHTML = response.wind_degrees
        pune_wind_speed.innerHTML = response.wind_speed

    })
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        hyderabad_cloud_pct.innerHTML = response.cloud_pct
        hyderabad_feels_like.innerHTML = response.feels_like
        hyderabad_humidity.innerHTML = response.humidity
        hyderabad_max_temp.innerHTML = response.max_temp
        hyderabad_min_temp.innerHTML = response.min_temp
        hyderabad_temp.innerHTML = response.temp
        hyderabad_wind_degrees.innerHTML = response.wind_degrees
        hyderabad_wind_speed.innerHTML = response.wind_speed

    })
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        lucknow_cloud_pct.innerHTML = response.cloud_pct
        lucknow_feels_like.innerHTML = response.feels_like
        lucknow_humidity.innerHTML = response.humidity
        lucknow_max_temp.innerHTML = response.max_temp
        lucknow_min_temp.innerHTML = response.min_temp
        lucknow_temp.innerHTML = response.temp
        lucknow_wind_degrees.innerHTML = response.wind_degrees
        lucknow_wind_speed.innerHTML = response.wind_speed

    })
	.catch(err => console.error(err));

// const fillTable = (city) => {
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
// 	.then(response => response.json())
// 	.then(response => {
//         let placeholder = document.querySelector("#data-output");
//         let out = "";
        
//         out += `
//             <tr>
//                 <th> ${city} </th>
//                 <td> ${response.cloud_pct} </td>
//                 <td> ${response.feels_like} </td>
//                 <td> ${response.humidity} </td>
//                 <td> ${response.max_temp} </td>
//                 <td> ${response.min_temp} </td>
//                 <td> ${response.temp} </td>
//                 <td> ${response.wind_degrees} </td>
//                 <td> ${response.wind_speed} </td>
//             </tr>
//         `;
        
//         placeholder.innerHTML = out;

//     })
// 	.catch(err => console.error(err));
// }

// fillTable("Mumbai");