const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export function locationAPI(city) {
	return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
}
export function weatherAPI(lat, lon) {
	return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
}

export function forecastAPI(lat, lon) {
	return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&=&appid=${API_KEY}`;
}
