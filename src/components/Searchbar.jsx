import { useState } from 'react';
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';
import { useDispatch } from 'react-redux';
import { updateLocation } from '../features/weather/weatherSlice';

export default function Searchbar({ closeModal }) {
	const [city, setCity] = useState('');
	const dispatch = useDispatch();

	const handleChange = (newCity) => setCity(newCity);

	const handleSelect = async (selectedCity) => {
		try {
			const results = await geocodeByAddress(selectedCity);
			const { lat, lng: lon } = await getLatLng(results[0]);
			dispatch(updateLocation({ lat, lon }));
			closeModal('add');
		} catch (error) {
			console.error('Error: ', error);
		}
	};

	return (
		<PlacesAutocomplete value={city} onChange={handleChange} onSelect={handleSelect}>
			{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
				<div>
					<input
						placeholder='Search places...'
						className='searchbar'
						{...getInputProps()}
					/>
					<div className='autocomplete-dropdown-container'>
						{loading && <div className='suggestion-item'>Loading...</div>}
						{suggestions.map((suggestion) => {
							const { active, placeId, description } = suggestion;
							const className = active ? 'suggestion-item-active' : 'suggestion-item';
							return (
								<div
									className={className}
									key={placeId}
									{...getSuggestionItemProps(suggestion)}
								>
									{description}
								</div>
							);
						})}
					</div>
				</div>
			)}
		</PlacesAutocomplete>
	);
}
