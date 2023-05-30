import { getDefaultLocation, toggleUnits } from '../features/weather/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import Searchbar from './Searchbar';

export default function Navbar() {
	const { location } = useSelector((state) => state.weather);
	const { modals, openModal, closeModal } = useModal();
	const dispatch = useDispatch();

	return (
		<div className='nav-container'>
			<nav>
				<button className='button-icon' title='More' onClick={() => openModal('more')}>
					<span className='material-symbols-outlined'>more_vert</span>
				</button>
				<p className='nav-city'>{location.city}</p>
				<button
					className='button-icon'
					title='Add location'
					onClick={() => openModal('add')}
				>
					<span className='material-symbols-outlined'>add</span>
				</button>
			</nav>
			<Modal
				isOpen={modals.isMoreModalOpen}
				onClose={() => closeModal('more')}
				title='Options'
			>
				<button onClick={() => dispatch(toggleUnits())}>Toggle Units</button>
			</Modal>
			<Modal
				isOpen={modals.isAddModalOpen}
				onClose={() => closeModal('add')}
				title='Select location'
			>
				<Searchbar closeModal={closeModal} />
				<div className='modal-buttons'>
					<button
						onClick={() => dispatch(getDefaultLocation())}
						className='button-icon current-location'
					>
						<span className='material-symbols-outlined'>pin_drop</span>
					</button>
					<p>Current location</p>
				</div>
			</Modal>
		</div>
	);
}
