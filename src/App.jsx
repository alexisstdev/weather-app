import './App.css';
import DaysForecast from './components/DaysForecast';
import Forecast from './components/Forecast';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getDefaultLocation } from './features/weather/weatherSlice';
import { useEffect } from 'react';
import TodayHighlights from './components/TodayHighlights';
import { setBackgroundGradient } from './utils/setBackgroundClass';
import Spinner from './components/Spinner/Spinner';
import Error from './components/Error';

export default function App() {
	const dispatch = useDispatch();
	const { weather, loading, error } = useSelector((state) => state.weather);

	useEffect(() => {
		dispatch(getDefaultLocation());
	}, [dispatch]);

	setBackgroundGradient(weather.description);

	return (
		<main className='container'>
			<Navbar />
			{error ? (
				<Error error={error} />
			) : loading ? (
				<Spinner />
			) : (
				<>
					<section className='weather-content'>
						<Forecast />
						<TodayHighlights />
					</section>
					<DaysForecast />
				</>
			)}
		</main>
	);
}
