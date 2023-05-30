import { useSelector } from 'react-redux';

export default function Forecast() {
	const dateOptions = { weekday: 'short', day: 'numeric', month: 'short' };
	const date = new Date(Date.now());
	const stringDate = date.toLocaleDateString('en-US', dateOptions);
	const { weather } = useSelector((state) => state.weather);

	return (
		<>
			Today | <span>{stringDate}</span>
			<div className='forecast-main'>
				<h1 className='forecast-temp'>
					<span>{weather.temp}</span>
					<span className='forecast-units'>
						{weather.units === 'celsius' ? ' °C' : ' °F'}
					</span>
				</h1>
				<p className='forecast-description'>{weather.description}</p>
			</div>
		</>
	);
}
