export default function WeatherIcon({ conditionCode }) {
	const getWeatherIconClass = (code) => {
		const iconMap = {
			'01d': 'wi-day-sunny',
			'01n': 'wi-night-clear',
			'02d': 'wi-day-cloudy',
			'02n': 'wi-night-cloudy',
			'03d': 'wi-cloud',
			'03n': 'wi-cloud',
			// ... add more mappings for other condition codes
		};

		return iconMap[code] || 'wi-day-cloudy';
	};

	const iconClass = getWeatherIconClass(conditionCode);

	return <i className={`wi ${iconClass}`} />;
}
