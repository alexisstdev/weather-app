import { useSelector } from 'react-redux';
import WeatherIcon from './WeatherIcon';

export default function DaysForecast() {
	const { forecast } = useSelector((state) => state.weather);
	return (
		<>
			<section className='days'>
				{forecast.map((item, index) => {
					return <Day forecast={item} key={index} />;
				})}
			</section>
		</>
	);
}

function Day({ forecast }) {
	return (
		<div className='weather-day'>
			<div className='weather-day-info'>
				<p className='day'>{forecast.day}</p>
				<p className='description'>{forecast.description}</p>
			</div>
			<p className='weather-day-temperature'>
				{forecast.max}°<span className='min'> / {forecast.min}°</span>
			</p>
			<WeatherIcon conditionCode={forecast.iconCode} />
		</div>
	);
}
