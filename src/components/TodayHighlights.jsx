import { useSelector } from 'react-redux';

export default function TodayHighlights() {
	const { weather } = useSelector((state) => state.weather);

	return (
		<>
			<section className='highlights'>
				<div className='highlight-detail'>
					<span className='material-symbols-outlined'>air</span>
					<p>{weather.airPressure} hpa</p>
				</div>
				<div className='highlight-detail'>
					<span className='material-symbols-outlined'>humidity_low</span>
					<p>{weather.humidity}%</p>
				</div>
				<div className='highlight-detail'>
					<span className='material-symbols-outlined'>air</span>
					<p>{weather.windSpeed} mph</p>
				</div>
			</section>

			{/* <section className='highlights2'>
				<div className='highlight-detail'>
					<h3>Real feel</h3>
					<p>
						{weather.realFeel}
						{weather.units === 'celsius' ? ' °C' : ' °F'}
					</p>
				</div>
				<div className='highlight-detail'>
					<h3>Visibility</h3>
					<p>{weather.visibility} km</p>
				</div>
				<div className='highlight-detail'>
					<h3>Wind direction</h3>
					<p>{weather.windDirection} deg</p>
				</div>
			</section> */}
		</>
	);
}
