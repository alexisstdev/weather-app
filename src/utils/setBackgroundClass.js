export function setBackgroundGradient(weatherDescription) {
	switch (weatherDescription) {
		case 'clear sky':
			document.documentElement.style.setProperty('--bg-gradient-1', '#1e90ff');
			document.documentElement.style.setProperty('--bg-gradient-2', '#00bfff');
			break;
		case 'few clouds':
			document.documentElement.style.setProperty('--bg-gradient-1', '#b0c4de');
			document.documentElement.style.setProperty('--bg-gradient-2', '#87cefa');
			break;
		case 'scattered clouds':
			document.documentElement.style.setProperty('--bg-gradient-1', '#808080');
			document.documentElement.style.setProperty('--bg-gradient-2', '#a9a9a9');
			break;
		case 'broken clouds':
		case 'overcast clouds':
			document.documentElement.style.setProperty('--bg-gradient-1', '#696969');
			document.documentElement.style.setProperty('--bg-gradient-2', '#808080');
			break;
		case 'mist':
		case 'smoke':
		case 'haze':
		case 'dust':
		case 'fog':
		case 'sand':
		case 'ash':
			document.documentElement.style.setProperty('--bg-gradient-1', '#c0c0c0');
			document.documentElement.style.setProperty('--bg-gradient-2', '#d3d3d3');
			break;
		case 'squall':
		case 'tornado':
			document.documentElement.style.setProperty('--bg-gradient-1', '#800000');
			document.documentElement.style.setProperty('--bg-gradient-2', '#a52a2a');
			break;
		case 'light rain':
		case 'moderate rain':
		case 'freezing rain':
		case 'light shower rain':
		case 'shower rain':
		case 'heavy shower rain':
			document.documentElement.style.setProperty('--bg-gradient-1', '#87ceeb');
			document.documentElement.style.setProperty('--bg-gradient-2', '#4682b4');
			break;
		case 'light snow':
		case 'moderate snow':
		case 'heavy snow':
		case 'mix snow/rain':
		case 'sleet':
		case 'shower sleet':
		case 'light rain and snow':
		case 'rain and snow':
		case 'light shower snow':
		case 'shower snow':
		case 'heavy shower snow':
			document.documentElement.style.setProperty('--bg-gradient-1', '#ffffff');
			document.documentElement.style.setProperty('--bg-gradient-2', '#d3d3d3');
			break;
		case 'thunderstorm with light rain':
		case 'thunderstorm with rain':
		case 'thunderstorm with heavy rain':
		case 'thunderstorm with light snow':
		case 'thunderstorm with snow':
		case 'thunderstorm with heavy snow':
			document.documentElement.style.setProperty('--bg-gradient-1', '#556b2f');
			document.documentElement.style.setProperty('--bg-gradient-2', '#8fbc8f');
			break;
		default:
			document.documentElement.style.setProperty('--bg-gradient-1', '#b0c4de');
			document.documentElement.style.setProperty('--bg-gradient-2', '#87cefa');
	}
}
