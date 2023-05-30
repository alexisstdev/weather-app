import { createSlice } from '@reduxjs/toolkit';
import { locationAPI, weatherAPI, forecastAPI } from '../../utils/apiUrls';
import { transformForecast, transformWeather } from '../../utils/dataTransformations';
import { celsiusToFarenheit, fahrenheitToCelsius } from '../../utils/unitsConversion';

const initialState = {
	loading: true,
	error: null,
	location: {
		lat: 0,
		lon: 0,
		city: '',
	},
	weather: {
		id: 0,
		temp: 0,
		airPressure: 0,
		windDirection: 0,
		humidity: 0,
		windSpeed: 0,
		visibility: 0,
		description: '',
		units: '',
	},
	forecast: [
		{ day: '', description: '', min: 0, max: 0 },
		{ day: '', description: '', min: 0, max: 0 },
		{ day: '', description: '', min: 0, max: 0 },
		{ day: '', description: '', min: 0, max: 0 },
		{ day: '', description: '', min: 0, max: 0 },
	],
};

export const updateLocation =
	({ lat, lon }) =>
	async (dispatch) => {
		try {
			dispatch(weatherSlice.actions.setLoading(true));

			const resWeather = await fetch(weatherAPI(lat, lon));
			if (!resWeather.ok) throw new Error('Failed to fetch weather data');
			const weather = await resWeather.json();

			const resForecast = await fetch(forecastAPI(lat, lon));
			if (!resForecast.ok) throw new Error('Failed to fetch forecast data');
			const forecast = await resForecast.json();

			const mappedLocation = { city: weather.name, lat: lat, lon: lon };

			dispatch(
				weatherSlice.actions.getWeather({
					weather: transformWeather(weather),
					location: mappedLocation,
					forecast: transformForecast(forecast),
				})
			);
		} catch (e) {
			dispatch(weatherSlice.actions.setError(e.message));
		} finally {
			dispatch(weatherSlice.actions.setLoading(false));
		}
	};

export const getDefaultLocation = () => async (dispatch) => {
	dispatch(weatherSlice.actions.setLoading(true));

	try {
		if (!navigator.geolocation) throw new Error('Geolocation is not supported.');

		const position = await new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});

		const lat = position.coords.latitude;
		const lon = position.coords.longitude;

		const resWeather = await fetch(weatherAPI(lat, lon));
		if (!resWeather.ok) throw new Error('Failed to fetch weather data');
		const weather = await resWeather.json();

		const resForecast = await fetch(forecastAPI(lat, lon));
		if (!resForecast.ok) throw new Error('Failed to fetch weather data');
		const forecast = await resForecast.json();

		const location = { city: weather.name, lat: lat, lon: lon };
		dispatch(
			weatherSlice.actions.getWeather({
				weather: transformWeather(weather),
				forecast: transformForecast(forecast),
				location,
			})
		);
	} catch (e) {
		dispatch(weatherSlice.actions.setError(e.message));
	} finally {
		dispatch(weatherSlice.actions.setLoading(false));
	}
};

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		getWeather: (_, action) => action.payload,
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		toggleUnits: (state) => {
			const { units, temp, realFeel } = state.weather;

			if (units === 'celsius') {
				state.weather.temp = celsiusToFarenheit(temp);
				state.weather.realFeel = celsiusToFarenheit(realFeel);
				state.weather.units = 'fahrenheit';
				state.forecast.forEach((day) => {
					day.min = celsiusToFarenheit(day.min);
					day.max = celsiusToFarenheit(day.max);
				});
			} else {
				state.weather.temp = fahrenheitToCelsius(temp);
				state.weather.realFeel = fahrenheitToCelsius(realFeel);
				state.weather.units = 'celsius';
				state.forecast.forEach((day) => {
					day.min = fahrenheitToCelsius(day.min);
					day.max = fahrenheitToCelsius(day.max);
				});
			}
		},
	},
});

export const { toggleUnits } = weatherSlice.actions;
export default weatherSlice.reducer;
