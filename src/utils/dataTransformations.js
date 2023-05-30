import { kelvinToCelsius } from './unitsConversion';

export const transformWeather = (weather) => ({
	id: weather.id,
	temp: kelvinToCelsius(weather.main.temp),
	realFeel: kelvinToCelsius(weather.main.feels_like),
	airPressure: weather.main.pressure,
	windDirection: weather.wind.deg,
	humidity: weather.main.humidity,
	windSpeed: weather.wind.speed,
	description: weather.weather[0].description,
	visibility: weather.visibility / 1000,
	units: 'celsius',
});

export const transformForecast = (forecast) => {
	const filteredForecast = forecast.list.filter((item) =>
		item.dt_txt.includes('12:00:00')
	);

	return filteredForecast.map((item) => {
		const dt = new Date(parseInt(item.dt * 1000));

		const dayOptions = { weekday: 'long' };
		const weekday = dt.toLocaleString('en-US', dayOptions);

		const dateOptions = { day: 'numeric', month: 'short' };
		const date = dt.toLocaleString('en-US', dateOptions);

		return {
			day: weekday,
			date: date,
			min: kelvinToCelsius(item.main.temp_min),
			max: kelvinToCelsius(item.main.temp_max),
			description: item.weather[0].description,
			iconCode: item.weather[0].icon,
		};
	});
};
