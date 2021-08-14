// 4d61879a98af09938b2a2f8f61ff623a
// https://api.openweathermap.org/data/2.5/weather?lat=35.3370112&lon=129.0207232&appid=4d61879a98af09938b2a2f8f61ff623a
const API_KEY = '4d61879a98af09938b2a2f8f61ff623a';
function onGeoOk(position) {
	console.log(position);
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	console.log(url);

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.name, data.weather[0].main);
			const weather = document.querySelector('#weather span:first-child');
			const city = document.querySelector('#weather span:last-child');
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} /${data.main.temp}`;
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
